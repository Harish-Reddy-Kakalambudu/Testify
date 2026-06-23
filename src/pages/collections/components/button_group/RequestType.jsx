import {useState} from "react"
import { ButtonGroup } from "@mui/material"
import Button from "../../../../components/button/Button"
import LanguageIcon from '@mui/icons-material/Language';
import WifiTetheringIcon from '@mui/icons-material/WifiTethering';
import SchemaIcon from '@mui/icons-material/Schema';

const RequestTypeButtonGroup = ({onClick})=>{
    return (
            <ButtonGroup variant="outlined" aria-label="Request Button Group" className="h-full">
                <Button label={"HTTP"} startIcon={<LanguageIcon/>} bgcolor="var(--pri-100)" color="var(--pri-400)"/>
                <Button label={"WS"} startIcon={<WifiTetheringIcon/>}bgcolor="var(--pri-100)" color="var(--pri-400)"/>
                <Button label={"GQL"} startIcon={<SchemaIcon/>} bgcolor="var(--pri-100)" color="var(--pri-400)"/>
            </ButtonGroup>
    )
}

export default RequestTypeButtonGroup