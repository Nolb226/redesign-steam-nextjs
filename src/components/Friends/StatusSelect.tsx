import React from 'react'
import Select, { SingleValue } from 'react-select'

const statuses = [
    { value: 'online', label: 'Online', color: '#66C0F4' },
    { value: 'offline', label: 'Offline', color: '#76808C' },
    { value: 'away', label: 'Away', color: '#C1B15F' },
]

const dot = (color = 'transparent') => ({
    alignItems: 'center',
    display: 'flex',

    ':before': {
        backgroundColor: color,
        borderRadius: 10,
        content: '" "',
        display: 'block',
        marginRight: 8,
        height: 10,
        width: 10,
    },
})

function StatusSelect({ onChange }: { onChange?: (option: any) => void }) {
    return (
        <Select
            onChange={(option) => onChange && onChange(option)}
            options={statuses}
            isSearchable={false}
            defaultValue={statuses[0]}
            components={{
                IndicatorSeparator: () => null,
            }}
            styles={{
                control: (base, { isFocused }) => ({
                    ...base,
                    color: 'white',
                    backgroundColor: 'transparent',
                    minHeight: 'fit-content',
                    border: 'none',
                    borderRadius: 3,
                    ...(isFocused && {
                        boxShadow: '0 0 0 1px white',
                    }),
                    padding: '0 0',
                }),
                singleValue: (styles, { data }) => ({
                    ...styles,
                    color: data.color,
                    fontSize: 14,
                    ...dot(data.color),
                }),
                dropdownIndicator: (base) => ({
                    ...base,
                    padding: '0px',
                }),
            }}
        />
    )
}

export default StatusSelect
