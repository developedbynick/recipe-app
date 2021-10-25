class Fonts {
    constructor() {
        this.poppins = 'Poppins';
        this.poppinsSemiBold = 'Poppins-SemiBold';
        this.poppinsBold = 'Poppins-Bold';
        this.fontsLoaded = false;
    }

    getFont(requestedFont) {
        if (!this.fontsLoaded) return '';
        return requestedFont;
    }
}

export default new Fonts()