"use client"

import {Switch} from "@/components/ui/switch"
import {useState} from "react";

export function FieldSwitch(field: { data: any; }) {
    let data = field.data;

    const [checked, setChecked] = useState(false);

    return (
        <>
            <Switch
                name={data.id}
                id={data.id}
                checked={checked}
                onCheckedChange={setChecked}
            />
            <input type="hidden" name={data.id} value={checked ? "on" : "off"}/>
        </>
    )
}
