import React from "react";
import {Button} from "primereact/button";

export const ButtonComponent = () => {
    return <>
        <Button style={{height: '30px', fontSize: '10px', width: '196px'}}
                label="Поиск в локальной БД" className="p-button-raised"/>
    </>
}