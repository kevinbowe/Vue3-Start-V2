<script setup lang="ts">
import { ref, inject } from "vue"
import { useUserPiniaStore } from "../stores/users"

import '@mdi/font/css/materialdesignicons.css'
/* -------------------------------------------------------------------------- */
const log = inject('log', null)					// DEBUG
const bar = inject('bar', null)					// DEBUG
const whitebar = inject('whitebar', null)		// DEBUG
const redbar = inject('redbar', null)			// DEBUG
const bluebar = inject('bluebar', null)		// DEBUG
const getNames = inject('getNames', null)		// DEBUG
/* -------------------------------------------------------------------------- */
const piniaStore = useUserPiniaStore()

/* -------------------------------------------------------------------------- */
const localMsg = "my local message"		//----------------------------// DEBUG
const myObj = {"ONE": "one", "TWO": "two", "THREE": "THREE-Text"}		// DEBUG

/* %%%%%%  On Page Load %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% */
redbar(`inject(redbar) -- Dev Page`)				// ------------------------------// DEBUG
log(`DevView.vue Executing -- ${localMsg} -- Value: `, myObj.TWO)		// DEBUG

////	Using global properies -- Defined in main.ts
import { getCurrentInstance } from 'vue'

const gProps = getCurrentInstance().appContext.config.globalProperties

const gMsg = gProps.myGlobMsg
const gFunc = gProps.myGlobFunc

log(`(gMsg) > ${gMsg}`)
gFunc(`(gFunc( \${gMsg} )) > ${gMsg}`)

////	THIS WORKS
import   { count, decrement, increment }  from "../composables/MyCompUtil"

/* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% */
</script>

<template>
	<div >
		<h5 class="d-flex justify-center" >( DevView )</h5>

		<v-row no-gutters class="mt-5">
			<v-col style="text-align:right;">
				<v-btn @click="increment">Increment</v-btn>
			</v-col>
			<v-col cols="1" class="d-flex justify-center"> {{ count }} </v-col>
			<v-col style="text-align:left;">
				<v-btn @click="decrement">Decrement</v-btn>
			</v-col>
		</v-row>
	</div>
</template>