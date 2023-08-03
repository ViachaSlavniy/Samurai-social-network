

// export const maxLengthCreator = (minLength) => value => {
//     value && value.length < minLength ? undefined : `Min length ${minLength} symbols`
// }

export const required = (value) => (value ? undefined : 'Field is required')

