<script setup lang="ts">
import { ref, inject } from "vue"
import { useUserPiniaStore } from "../stores/users"
import '@mdi/font/css/materialdesignicons.css'
import con from "../components/MyUtil"
import { fail } from "../components/MyConsoleUtil"
/* -------------------------------------------------------------------------- */
const piniaStore = useUserPiniaStore()
const cb = ref()
const cbLbl = ref("Unchecked")
const btnTxt = ref("Hello-Start")
/* -------------------------------------------------------------------------- */
const log = inject('log', null)					// DEBUG
const bar = inject('bar', null)					// DEBUG
const whitebar = inject('whitebar', null)		// DEBUG
const redbar = inject('redbar', null)			// DEBUG
const bluebar = inject('bluebar', null)		// DEBUG
const getNames = inject('getNames', null)		// DEBUG
/* -------------------------------------------------------------------------- */
const SelCb = () => {
	bar()			//----------------------------------// DEBUG
			log(`Enter myCheckbox ${cbLbl.value}`)		// DEBUG

	cbLbl.value = cb.value ? "Unchecked" : "Checked"
	cb.value = !cb.value

			log(`Exit myCheckbox ${cbLbl.value}`)		// DEBUG
}
/* -------------------------------------------------------------------------- */
const SelBtn = () => {
			bar()			//-------------------------// DEBUG
			log(`Enter myBtn ${btnTxt.value}`)		// DEBUG

	btnTxt.value = btnTxt.value === "Hello" ? "Goodbye" : "Hello"
		
			log(`Exit myBtn ${btnTxt.value}`)		// DEBUG
}
/* ----------------------------------------------------------------------------- */
const localMsg = "my local message"													// DEBUG
const myObj = {"ONE": "one", "TWO": "two", "THREE": "THREE-Text"}			// DEBUG

/* %%%%%%  On Page Load %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% */

bluebar(`(inject(bluebar)) > HomeView.vue Executing`)			// ---------------------// DEBUG
log(`(inject(log)) > HomeView.vue Executing -- ${localMsg} -- Value: `, myObj.THREE)		// DEBUG
con.pass(`((import con) con.pass) > HomeView.vue Executing -- ${localMsg} -- Value: `, myObj.THREE)		// DEBUG
fail(`(import {fail}) > HomeView.vue Executing -- ${localMsg} -- Value: `, myObj.THREE)		// DEBUG

import { getCurrentInstance } from 'vue'
const gProps = getCurrentInstance().appContext.config.globalProperties

log(`(gProps.myGlobMsg) > ${gProps.myGlobMsg}`)
gProps.myGlobFunc(`(gProps.myGlobFunc( \${gProps.myGlobMsg} )) > ${gProps.myGlobMsg}`)

//	Longer version of getCurrentInstance

// import { getCurrentInstance } from 'vue'
const myThis = getCurrentInstance()

const myGlobMsg = myThis.appContext.config.globalProperties.myGlobMsg
log(`(myGlobMsg) > ${myGlobMsg}`)

const myGlobFunc = myThis.appContext.config.globalProperties.myGlobFunc
myGlobFunc(`(myGlobFunc(~)) > ${myGlobMsg}`)

/* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% */
</script>

<template>
		<div>
			<h5 class="d-flex justify-center" >( HomeView )</h5>
			<v-checkbox class="d-flex justify-center" :label="cbLbl" @click="SelCb" />
		
			<div class="d-flex justify-center">
				<v-btn :text="btnTxt" @click="SelBtn" />
			</div>

		</div>
</template>