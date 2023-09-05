import {
    cpfCnpjInputTransform,
    intInputTransform,
    doubleInputTransform,
    phoneInputTransform
} from './transforms'

export const masks = {
    cpf: cpfCnpjInputTransform,
    number: intInputTransform,
    float: doubleInputTransform,
    phone: phoneInputTransform
}