import { AbstractControl, FormBuilder, FormControl, FormGroup } from '@angular/forms'
import { ValidateKey } from '@shared/enums/validators.enum'

type ControlsOf<T> = {
    [K in keyof T]: FormControl<T[K]>
}

type ControlValue<C> = C extends AbstractControl<infer V> ? V : never

type PatchValue<T> = Partial<{
    [K in keyof ControlsOf<T>]: ControlValue<ControlsOf<T>[K]>
}>

export abstract class BaseForm<T> {
    protected form: FormGroup<ControlsOf<T>>
    protected errorMessages: { [key: string]: string } = {
        [ValidateKey.REQUIRED]: 'Este campo es requerido',
        [ValidateKey.EMAIL]: 'Ingrese un correo válido',
        [ValidateKey.PHONE]: 'Ingrese un teléfono válido',
        [ValidateKey.ONLY_DIGITS]: 'Este campo debe contener solo números',
        [ValidateKey.FLOAT]: 'Este campo debe ser un número y permite hasta 2 decimales',
        [ValidateKey.INTEGERS_AND_DECIMALS_SUPPORTED]: 'Este campo permite 14 enteros y 2 decimales',
        [ValidateKey.MAX_LENGTH_CUSTOM]: 'Has alcanzado el límite de caracteres.',
        [ValidateKey.MIN_LENGTH_CUSTOM]: 'Has alcanzado el mínimo de caracteres.',
        [ValidateKey.HAS_LENGTH]: 'Ingrese un valor de longitud correcta.',
        [ValidateKey.HAS_NOT_UPPER_CASE]: 'Ingrese al menos una mayúscula.',
        [ValidateKey.HAS_NOT_LOWER_CASE]: 'Ingrese al menos una minúscula.',
        [ValidateKey.HAS_NOT_DIGIT]: 'Ingrese al menos un número.',
        [ValidateKey.ONLY_DIGITS_AND_LETTERS]: 'Ingrese solo números y letras.',
        [ValidateKey.CALENDAR_RANGE]: 'Rango de fechas inválido.',
        [ValidateKey.NOT_EMPTY]: 'No permite contener solo espacios en blanco.',
        [ValidateKey.HAS_SPACE]: 'No permite espacios en blanco.',
        [ValidateKey.MAX_VALUE]: 'Valor mayor al esperado.',
        [ValidateKey.NOT_NEGATIVE]: 'No permite números negativos.',
    }

    constructor(protected fb: FormBuilder) {
        this.form = this.createFormGroup()
    }

    protected abstract createFormGroup(): FormGroup

    get formGroup(): FormGroup<ControlsOf<T>> {
        return this.form
    }

    get controls() {
        return this.form.controls
    }

    getField(name: string): AbstractControl | null {
        return this.form.get(name)
    }

    getFormInvalid(name: string): boolean {
        const control = this.getField(name)
        return control ? control.invalid && (control.dirty || control.touched) : false
    }

    getErrorField(name: string): string {
        const control = this.getField(name)
        const errorKey = Object.keys(control?.errors || {})[0]
        const error = control?.errors?.[errorKey]

        this.errorMessages = {
            ...this.errorMessages,
            [ValidateKey.MIN_LENGTH_CUSTOM]: `El campo debe tener al menos ${error.requiredLength} car${error.requiredLength === 1 ? 'á' : 'a'}cter${error.requiredLength === 1 ? '' : 'es'}`,
            [ValidateKey.MAX_LENGTH_CUSTOM]: `El campo debe tener máximo ${error.requiredLength} car${error.requiredLength === 1 ? 'á' : 'a'}cter${error.requiredLength === 1 ? '' : 'es'}`,
            [ValidateKey.HAS_LENGTH]: `El campo debe tener ${error.requiredLength} car${error.requiredLength === 1 ? 'á' : 'a'}cter${error.requiredLength === 1 ? '' : 'es'}`,
            max: `El valor máximo es ${error.max}`,
            min: `El valor mínimo es ${error.min}`,
        }
        return this.errorMessages[errorKey] || ''
    }

    get value(): T {
        return this.form.value as T
    }

    get rawValue(): T {
        return this.form.getRawValue() as T
    }

    get invalid() {
        return this.form.invalid
    }

    patchValue(form: PatchValue<T>) {
        this.form.patchValue(form)
    }

    reset() {
        this.form.reset()
    }
}
