import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { BaseForm } from '@domain/base.form'

type ConfigPDF = {
    pagesToOmit: number[]
    pageFormat: string
}

export class ConfigPDFForm extends BaseForm<ConfigPDF> {
    constructor(fb: FormBuilder) {
        super(fb)
    }

    protected createFormGroup(): FormGroup {
        return this.fb.nonNullable.group({
            pagesToOmit: [
                {
                    value: [],
                    disabled: true,
                },
                [],
            ],
            pageFormat: ['{n} / {t}', [Validators.required]],
        })
    }
}
