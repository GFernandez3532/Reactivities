import { useField } from "formik";
import { FormField, Label } from "semantic-ui-react";
import Datepicker,{ReactDatePickerProps} from "react-datepicker";

// interface Props {
//     placeholder: string;
//     name: string;
//     label?: string;
// }

export default function MyDateInput(props: Partial<ReactDatePickerProps>) {

    const [field, meta, helpers] = useField(props.name!)
    return (
        <FormField error={meta.touched && !! meta.error}>
            <Datepicker
                {...field}
                {...props}
                selected={(field.value && new Date(field.value)) || null}
                onChange={value => helpers.setValue(value)}
            />
            {meta.touched && meta.error ? (
                <Label basic color="red">{meta.error}</Label>
            ) : null}
        </FormField>
    )

}