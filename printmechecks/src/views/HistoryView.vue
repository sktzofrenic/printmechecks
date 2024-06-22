<template>
    <div class="about">
        <h1>History</h1>
        <div v-if="history.length === 0">
            <p>No history yet</p>
        </div>
        <div v-else>
            <table class="table">
                <thead>
                    <tr>
                        <th>Check #</th>
                        <th>Amount</th>
                        <th>Payee</th>
                        <th>Account</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in history" :key="item.id">
                        <td>{{ item.checkNumber }}</td>
                        <td>${{ formatMoney(item.amount) }}</td>
                        <td>{{ item.payTo }}</td>
                        <td>{{ item.bankAccountNumber }}</td>
                        <td>
                            <button class="btn btn-outline-danger" @click="deleteItem(index)" style="margin-right: 10px">Delete</button>
                            <button class="btn btn-outline-primary" @click="viewItem(index)">View</button>
                        </td>

                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<style>
</style>

<script setup>
import {formatMoney} from '../utilities.ts'
import { ref, onMounted} from 'vue'
import { useAppStore } from '../stores/app.ts'
import { useRouter } from 'vue-router'

const state = useAppStore()
const router = useRouter()

const history = ref([])

const loadHistory = () => {
  history.value = JSON.parse(localStorage.getItem('checkList') || '[]')
}

const deleteItem = (index) => {
  history.value.splice(index, 1)
  localStorage.setItem('checkList', JSON.stringify(history.value))
}

const viewItem = (index) => {
    const item = history.value[index]
    state.check = item
    router.push('/')
}

onMounted(() => {
  loadHistory()
})


</script>
