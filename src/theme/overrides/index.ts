
import { merge } from "lodash";

import type { Components, Theme } from '@mui/material/styles'

import Button from "./Button"
import CheckBox from "./CheckBox";
import Radio from "./Radio";
import Select from "./Select";

const AppComponentsOverrides = (theme : Theme): Components<Theme> => {
    return merge(
        {},
        Button(theme),
        CheckBox(theme),
        Radio(theme),
        Select(theme),
    ) as Components<Theme>
}

export default AppComponentsOverrides;