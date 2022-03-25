const formatToCapitalized = (value: string): string => {
    if(value === undefined || value === null || value === '') {
        return '';
    }
    return value[0].toUpperCase() + value.substr(1);

};

export default formatToCapitalized;