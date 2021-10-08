class Splitter {

    reset() {
        this.percentage = 0
        this.tipPerPerson = 0 
        this.totalPerPerson = 0
        splitter.displayTotals()
    }
    
    calculate(percentage) {
        this.percentage = percentage
        this.tipPerPerson = ((totalPrice.value * percentage) / peopleNumber.value).toFixed(2)
        this.totalPerPerson = (totalPrice.value / peopleNumber.value).toFixed(2)
        if (peopleNumber.value == 0 || totalPrice.value == 0) return
        splitter.displayTotals()
    }

    input() {
        this.calculate(this.percentage)
    }

    displayTotals() {
        if (isNaN(this.tipPerPerson) || isNaN(this.totalPerPerson)) return 
        tipPerPerson.innerText = '$' + this.tipPerPerson.toString()
        totalPerPerson.innerText = '$' + this.totalPerPerson.toString()
    }

    reset() {
        this.percentage = 0
        this.tipPerPerson = 0 
        this.totalPerPerson = 0
        splitter.displayTotals()
        
    }

}

const percentageButtons = document.querySelectorAll('[data-percentage]');
const totalPrice = document.querySelector('[data-price]');
const peopleNumber = document.querySelector('[data-people]')
const tipPerPerson = document.querySelector('[data-tip-per-person]')
const totalPerPerson = document.querySelector('[data-total-per-person]')
const customPercentage = document.querySelector('[data-percentage-custom]')
const resetButton = document.querySelector('[data-reset]')


const splitter = new Splitter(tipPerPerson, totalPerPerson);

percentageButtons.forEach(button => {
    button.addEventListener('click', () => {
        unselect()
        button.className = 'selected'
        splitter.calculate(button.innerText.slice(0, -1)/100)
    })
})

totalPrice.addEventListener('input', () => {
    totalPrice.value = document.querySelector('[data-price]').value
    splitter.input()
})

peopleNumber.addEventListener('input', () => {
    peopleNumber.value = document.querySelector('[data-people]').value
    splitter.input()
})

customPercentage.addEventListener('input', () => {
    unselect()
    customPercentage.value = document.querySelector('[data-percentage-custom]').value
    splitter.calculate(customPercentage.value/100)
})

resetButton.addEventListener('click', () => {
    customPercentage.value = ''
    totalPrice.value = ''
    peopleNumber.value = ''
    splitter.reset()
    unselect()
})

function unselect(){
    percentageButtons.forEach(button => {
        button.className = 'percentage-button'
    }
)}

        
    
