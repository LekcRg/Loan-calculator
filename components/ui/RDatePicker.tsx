import { useState, useEffect } from 'react';
import styled from 'styled-components';

import { useDatePicker } from '@rehookify/datepicker';

import type { ActiveCalendar } from '@/types/RDatePicker';

import RLabel from './RLabel';
import RDatePickerHeader from '@/components/ui/RDatePicker/RDatePickerHeader';
import RDatePickerCalendar from '@/components/ui/RDatePicker/RDatePickerCalendar';
import RDatePickerInner from '@/components/ui/RDatePicker/RDatePickerInner';
import { dateNowUTC, dateToString, getPrettyDate, stringToDate } from '@/assets/ts/dateUtils';

type Props = {
  name: string,
  label?: string,
  value?: string,
  onChange?: Function,
  type?: ActiveCalendar,
  className?: string,
  blue?: boolean,
}

const Wrapper = styled.div`
  position: relative;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;

  &._visible {
    pointer-events: all;
  }
`;

const Button = styled.button<{ $blue?: boolean }>`
  text-align: left;
  width: 100%;
  background: ${(props) => props.$blue
    ? props.theme.colors.accent4
    : props.theme.colors.dark3};
  font-size: 18px;
  color: ${({ theme }) => theme.colors.light1};
  padding: 12px;
  border-radius: 4px;
  outline: none;
  border: none;
  cursor: pointer;
`;

const DatePicker = styled.div`
  position: absolute;
  top: calc(100% + 10px);
  padding: 10px;
  width: 270px;
  background-color: #000;
  z-index: 2;
  opacity: 0;
  pointer-events: none;

  &._visible {
    opacity: 1;
    pointer-events: all;
  }
`;

const RDatePicker = (props: Props) => {
  const {
    label,
    value,
    name,
    onChange,
    className,
    type = 'date',
    blue = false,
  } = props;

  let date = stringToDate(value || '') || dateNowUTC();

  const [ activeCalendar, changeActiveCalendar ] = useState<ActiveCalendar>(type);
  const [ selectedDates, onDatesChange ] = useState<Date[]>([ date ]);
  const [ offsetDate, onOffsetChange ] = useState<Date>(date);
  const [ isShow, changeIsShow ] = useState<boolean>(false);

  const datePickerHooks = useDatePicker({
    selectedDates,
    onDatesChange,
    // we want to manipulate with offsetDate outside of the hook
    offsetDate,
    onOffsetChange,
    calendar: {
      startDay: 1,
    },
  });

  const {
    data: { 
      calendars,
      years,
    },
    propGetters: {
      addOffset,
      subtractOffset,
      nextYearsButton,
      previousYearsButton,
    },
  } = datePickerHooks;

  const title = activeCalendar === 'year' 
    ? `${years[0].year} - ${years[years.length - 1].year}`
    : undefined;

  const headerNextProps = () => {
    if (activeCalendar === 'date') {
      return addOffset({ months: 1 });
    } else if (activeCalendar === 'month') {
      return addOffset({ years: 1 });
    } else if (activeCalendar === 'year') {
      return nextYearsButton();
    }
  };
  
  const headerPrevProps = () => {
    if (activeCalendar === 'date') {
      return subtractOffset({ months: 1 });
    } else if (activeCalendar === 'month') {
      return subtractOffset({ years: 1 });
    } else if (activeCalendar === 'year') {
      return previousYearsButton();
    }
  };

  const clickOverlay = () => {
    changeIsShow(false);
  };

  const onChangeCalendar = (nextActiveCalendar: ActiveCalendar, newDate: Date): void => {
    if (type !== activeCalendar) {
      changeActiveCalendar(nextActiveCalendar);
    } else {
      const year = newDate.getUTCFullYear();
      const month = newDate.getUTCMonth() + 1;
      const day = date.getUTCDate();

      onDatesChange([ new Date(Date.UTC(year, month, day)) ]);
    }
  };

  const prettyDate = getPrettyDate(date);

  useEffect(() => {
    if (onChange) {
      const newValue = dateToString(selectedDates[0]);

      if (value === newValue) {
        return;
      }

      onChange(newValue, name);
    }
  }, [ selectedDates, onChange, name, value ]);

  return (
    <Wrapper className={className}>
      <Overlay
        className={isShow ? '_visible' : ''}
        onClick={clickOverlay}
      />

      {
        label ?
          <RLabel
            onClick={() => changeIsShow(!isShow)}
          >
            { label }
          </RLabel>
          : ''
      }

      <Button
        onClick={() => changeIsShow(!isShow)}
        $blue={blue}
      >
        { prettyDate }
      </Button>

      {isShow ? (
        <DatePicker className="_visible">
          <RDatePickerHeader
            prevProps={() => headerPrevProps()}
            nextProps={() => headerNextProps()}
            calendars={calendars}
            activeCalendar={activeCalendar}
            changeActiveCalendar={changeActiveCalendar}
            title={title}
          />

          {
            activeCalendar === 'date' ?
              <RDatePickerCalendar
                datePickerHooks={datePickerHooks}
              />
              : ''
          }

          {
            activeCalendar === 'month' || activeCalendar === 'year' ?
              <RDatePickerInner
                datePickerHooks={datePickerHooks}
                activeCalendar={activeCalendar}
                changeActiveCalendar={onChangeCalendar}
              />
              : ''
          }
        </DatePicker>
      ) : ''}
    </Wrapper>
  );
};

export default RDatePicker;