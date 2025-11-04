"use client"

import {Label} from "@/components/ui/label"
import {
    RadioGroup,
    RadioGroupItem,
} from "@/components/ui/radio-group"
import {useMemo, useState} from "react";

export function FieldRadio(field: { data: any; }) {
    let data = field.data;

    const options = useMemo(() => {
        return Object.entries(data.options ?? {}) as [string, string][];
    }, [data.options]);

    let initialValue = data.value ?? '';

    if (typeof initialValue === "undefined" || initialValue === null || initialValue === '') {
        initialValue = data.default ?? '';
    }

    const [selectedValue, setSelectedValue] = useState(initialValue);

    return (
        <>
            <RadioGroup
                value={selectedValue}
                onValueChange={setSelectedValue}
                name={data.id}
                id={data.id}
            >
                {
                    options.map(([key, label]) => (
                        <div key={key} className="flex items-center gap-3">
                            <RadioGroupItem value={key} id={key}/>
                            <Label className="cursor-pointer" htmlFor={key}>{label}</Label>
                        </div>
                    ))
                }
            </RadioGroup>
            <input type="hidden" name={data.id} value={selectedValue}/>
        </>
    )
}
