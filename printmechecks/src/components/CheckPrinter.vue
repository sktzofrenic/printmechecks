<template>
    <div class="wrapper" id="wrapper">
        <canvas id="canvas"></canvas>
        <div class="check-box" id="check-box">
            <div style="position: relative;" id="check-box-print">
                <div class="account-holder-name" style="position: absolute; top: 40px; left: 60px">{{check.accountHolderName}}</div>
                <div class="account-holder-address" style="position: absolute; top: 70px; left: 60px">
                    {{check.accountHolderAddress}}<br>
                    {{check.accountHolderCity}}, {{check.accountHolderState}} {{check.accountHolderZip}}
                </div>
                <div class="check-number-human" style="position: absolute; top: 40px; left: 1060px">{{check.checkNumber}}</div>
                <div class="date-data" style="position: absolute; top: 80px; left: 850px">{{check.date}}</div>
                <div class="date" style="position: absolute; top: 90px; left: 760px">Date: _____________________ </div>
                <div class="amount-box" style="position: absolute; top: 175px; left: 950px">

                </div>
                <div class="amount-data" style="position: absolute; top: 182px; left: 970px">{{check.amount}}</div>
                <div class="pay-to-data" style="position: absolute; top: 180px; left: 180px">{{check.payTo}}</div>
                <div class="pay-to" style="position: absolute; top: 170px; left: 60px">
                    Pay to the <br>Order of
                        ______________________________________________________________________________________________|
                    
                </div>
                <div class="amount-line-data" style="position: absolute; top: 240px; left: 100px">{{toWords(check.amount)}}
                    {{check.amount.includes('.') ? ` and ${check.amount.split('.')[1]}/100` : ``}}</div>
                <div class="amount-line" style="position: absolute; top: 250px; left: 60px">
                    ________________________________________________________________________________________________________
                    Dollars
                </div>
                <div class="bank-name" style="position: absolute; top: 300px; left: 60px">{{check.bankName}}</div>
                <div class="memo-data" style="position: absolute; top: 377px; left: 120px">{{check.memo}}</div>
                <div class="memo" style="position: absolute; top: 390px; left: 60px">
                    Memo: ____________________________________
                </div>
                <div class="signature-data" style="position: absolute; top: 366px; left: 770px">{{check.signature}}</div>
                <div class="signature" style="position: absolute; top: 390px; left: 750px">
                    _________________________________________________
                </div>
                <div class="banking" style="position: absolute; top: 420px; left: 80px">
                    <div class="routing" style="display: inline;">
                        a{{check.routingNumber}}a
                    </div>
                    <div class="bank-account" style="display: inline;">{{check.bankAccountNumber}}c</div>
                    <div class="check-number" style="display: inline; margin-left:20px">{{check.checkNumber}}</div>
                </div>
            </div>
        </div>
        <div class="check-data">
            <button type="button" style="float: right;" class="btn btn-primary" @click="printCheck">Print</button>
            <form class="row g-3">
                <div class="col-md-6">
                    <label for="inputEmail4" class="form-label">Account Holder Name</label>
                    <input type="email" class="form-control" id="inputEmail4" v-model="check.accountHolderName">
                </div>
                <div class="col-md-6">
                </div>
                <div class="col-md-4">
                    <label for="inputAddress" class="form-label">Address</label>
                    <input type="text" class="form-control" id="inputAddress" v-model="check.accountHolderAddress">
                </div>
                <div class="col-md-2">
                    <label for="inputCity" class="form-label">City</label>
                    <input type="text" class="form-control" v-model="check.accountHolderCity">
                </div>
                <div class="col-md-2">
                    <label for="inputState" class="form-label">State</label>
                    <input type="text" class="form-control" v-model="check.accountHolderState">
                </div>
                <div class="col-md-2">
                    <label for="inputZip" class="form-label">Zip</label>
                    <input type="text" class="form-control" v-model="check.accountHolderZip">
                </div>
            </form>
            <form class="row g-3" style="margin-top: 30px; border-top: 1px solid #e7e7e7;">
                <div class="col-md-2">
                    <label for="inputEmail4" class="form-label">Check Number</label>
                    <input type="email" class="form-control" id="inputEmail4" v-model="check.checkNumber">
                </div>
                <div class="col-md-4">
                    <label for="inputAddress" class="form-label">Bank Name</label>
                    <input type="text" class="form-control" id="inputAddress" v-model="check.bankName">
                </div>
                <div class="col-md-2">
                    <label for="inputCity" class="form-label">Routing #</label>
                    <input type="text" class="form-control" v-model="check.routingNumber">
                </div>
                <div class="col-md-2">
                    <label for="inputState" class="form-label">Account #</label>
                    <input type="text" class="form-control" v-model="check.bankAccountNumber">
                </div>
                <div class="col-md-6">
                    <label for="inputZip" class="form-label">Memo</label>
                    <input type="text" class="form-control" v-model="check.memo">
                </div>
            </form>
            <form class="row g-3" style="margin-top: 30px; border-top: 1px solid #e7e7e7;">
                <div class="col-md-2">
                    <label for="inputEmail4" class="form-label">Amount</label>
                    <input type="email" class="form-control" id="inputEmail4" v-model="check.amount">
                </div>
                <div class="col-md-6">
                    <label for="inputZip" class="form-label">Pay To</label>
                    <input type="text" class="form-control" v-model="check.payTo">
                </div>
                <div class="col-md-2">
                    <label for="inputEmail4" class="form-label">Date</label>
                    <input type="email" class="form-control" id="inputEmail4" v-model="check.date">
                </div>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
import print from 'print-js';
import { default as converter } from 'number-to-words';
import { onMounted, onUpdated, ref } from 'vue'

const check = ref({
    accountHolderName: 'John Smith',
    accountHolderAddress: '123 Cherry Tree Lane',
    accountHolderCity: 'New York',
    accountHolderState: 'NY',
    accountHolderZip: '10001',
    checkNumber: '554',
    date: new Date().toLocaleDateString(),
    bankName: 'Bank Name, INC',
    amount: '100.00',
    payTo: 'Michael Johnson',
    memo: 'Rent',
    signature: 'John Smith',
    routingNumber: '022303659',
    bankAccountNumber: '000000000000',
})

function toWords (number: string) {
    return converter.toWords(number)
}

function renderCanvas () {
    const canvas: HTMLCanvasElement = document.getElementById('canvas')
    canvas.width = 1200
    canvas.height = 500
    const ctx = canvas.getContext('2d')
    ctx.fillStyle = 'red'
    ctx.fillRect(0, 0, 100, 100)
    return canvas
}

onMounted(() => {
    renderCanvas()
})

onUpdated(() => {
    renderCanvas()
})

function printCheck () {
    print({
        printable: 'check-box-print',
        type: 'html',
        maxWidth: 100,
        css: [
            'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css',
            'https://fonts.googleapis.com/css2?family=Caveat&display=swap'
        ],
        targetStyles: ['*'],
        documentTitle: 'Check',
    })
}

</script>

<style>
label {
    font-weight: bold;
}
.memo-data {
    font-family: Caveat;
    font-size: 30px;
    transform: rotate(-2deg);
}
.signature-data {
    font-family: Caveat;
    font-size: 40px;
    transform: rotate(-2deg);
}
.amount-line-data {
    text-transform: capitalize;
}
.date-data, .pay-to-data, .amount-data{
    font-size: 20px;
    font-weight: bold;
}
.check-data {
    margin-top: 50px;
    padding: 50px 120px;
    border-top: 1px solid #e6e6e6;
}
.bank-name{
    font-size: 20px;
    font-weight: bold;
}
.account-holder-name {
    font-size: 20px;
    font-weight: bold;
}
.check-number-human {
    font-size: 20px;
    font-weight: bold;
}
.amount-box::before {
    content: "$";
    font-size: 20px;
    margin-left: -15px;
}
.amount-box {
    width: 225px;
    height: 40px;
    border: 1px solid #c7c7c7;
    background-color: white;
}
.check-box {
    width: 1200px;
    height: 500px;
    border: 1px solid #e6e6e6;
    background-color: white;
    margin: 0 auto;
}

#check-box {
    width: 100%;
}

@font-face {
    font-family: 'banking';
    src: url('../assets/micrenc.ttf');
}


.banking {
    font-family: 'banking';
    font-size: 40px;
}
</style>

