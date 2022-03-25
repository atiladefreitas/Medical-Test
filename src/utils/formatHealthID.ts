const formatHealthID = (value: string): string => {
    if(value === undefined || value === null || value === '') {
        return '';
    }
    const badchars = /[^\d]/g;
    const mask = /(\d{3})(\d{3})(\d{4})/;
    const healthID = value.replace(badchars, '');
    return healthID.replace(mask, '$1.$2/$3');
};

export default formatHealthID;


