import * as React from 'react';
import { Persona } from '@fluentui/react-persona';
import { makeStyles, shorthands, useId } from '@fluentui/react-components';
import { Combobox, Option } from '@fluentui/react-combobox';
import type { ComboboxProps } from '@fluentui/react-combobox';

const useStyles = makeStyles({
  root: {
    // Stack the label above the field with a gap
    display: 'grid',
    gridTemplateRows: 'repeat(1fr)',
    justifyItems: 'start',
    ...shorthands.gap('2px'),
    maxWidth: '400px',
  },
});

export const ComplexOptions = (props: Partial<ComboboxProps>) => {
  const comboId = useId('combo-default');
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <label id={comboId}>Schedule a meeting</label>
      <Combobox aria-labelledby={comboId} {...props}>
        <Option text="Katri Athokas">
          <Persona
            avatar={{ color: 'colorful' }}
            name="Katri Athokas"
            presence={{
              status: 'available',
            }}
            secondaryText="Available"
          />
        </Option>
        <Option text="Elvia Atkins">
          <Persona
            avatar={{ color: 'colorful' }}
            name="Elvia Atkins"
            presence={{
              status: 'busy',
            }}
            secondaryText="Busy"
          />
        </Option>
        <Option text="Cameron Evans">
          <Persona
            avatar={{ color: 'colorful' }}
            name="Cameron Evans"
            presence={{
              status: 'away',
            }}
            secondaryText="Away"
          />
        </Option>
        <Option text="Wanda Howard">
          <Persona
            avatar={{ color: 'colorful' }}
            name="Wanda Howard"
            presence={{
              status: 'out-of-office',
            }}
            secondaryText="Out of office"
          />
        </Option>
      </Combobox>
    </div>
  );
};

ComplexOptions.parameters = {
  docs: {
    description: {
      story:
        'Options can have structured JSX children. ' +
        "When this is the case, the Option's `text` prop should be a the plain text version of the option, " +
        'and is used as the Combobox value when the option is selected.',
    },
  },
};
