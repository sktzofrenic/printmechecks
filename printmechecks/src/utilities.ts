function formatMoney (number: string) {
    var numberFloat: float = parseFloat(number)
    return numberFloat.toLocaleString('en-US', {style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2})
}

export { formatMoney }

