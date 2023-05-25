<template>
    <main>
        <div class="banner contactspage-banner">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <nav-bar-component />
                    </div>
                </div>
                <h1 class="title-big">Contact us</h1>
            </div>
        </div>
        <section class="contacts">
            <div class="container">
                <div class="row">
                    <div class="col col-12 col-lg-6 offset-0 offset-lg-3">
                        <div class="title mt-5">Tell us about your tastes</div>
                        <img class="beanslogo mt-5" src="@/assets/logo/Beans_logo_dark.svg" alt="Beans logo">
    
                        <form @submit.prevent="submit" action="#" class="mt-5">
                            <div class="form-group row">
                                <div class="col col-12 col-sm-3 d-flex align-items-start">
                                    <label for="name-input" class="mb-0">
                                        Name
                                        <span style="color: red;">*</span>
                                    </label>
                                </div>
                                <div class="col col-12 col-sm-9">
                                    <input 
                                    v-model="v$.name.$model" 
                                    type="text" 
                                    class="form-control" 
                                    id="name-input"
                                    />
                                    <span 
                                    v-for="error in v$.name.$errors"
                                    :key="error.$uid"
                                    >
                                    {{error.$message}}
                                    </span>
                                </div>
                            </div>
    
                            <div class="form-group row">
                                <div class="col col-12 col-sm-3 d-flex align-items-start">
                                    <label for="email-input" class="mb-0">
                                        E-mail
                                        <span style="color: red;">*</span>
                                    </label>
                                </div>
                                <div class="col col-12 col-sm-9">
                                    <input 
                                    v-model="v$.email.$model" 
                                    type="email" 
                                    class="form-control" 
                                    id="email-input"
                                    >
                                    <span 
                                    v-for="error in v$.email.$errors"
                                    :key="error.$uid"
                                    >
                                    {{error.$message}}
                                    </span>
                                </div>
                            </div>
    
                            <div class="form-group row">
                                <div class="col col-12 col-sm-3 d-flex align-items-start">
                                    <label for="phone-input" class="mb-0">
                                        Phone
                                    </label>
                                </div>
                                <div class="col col-12 col-sm-9">
                                    <input 
                                    v-model="v$.phone.$model" 
                                    type="tel" 
                                    class="form-control" 
                                    id="phone-input">
                                    <span 
                                    v-for="error in v$.phone.$errors"
                                    :key="error.$uid"
                                    >
                                    {{error.$message}}
                                    </span>
                                </div>
                            </div>
    
                            <div class="form-group row textarea">
                                <div class="col col-12 d-flex justify-content-start">
                                    <label for="pmessage" class="mb-3 mt-3 text-center">
                                        Your message
                                        <span style="color: red;">*</span>
                                    </label>
                                </div>
                                <div class="col col-12">
                                    <textarea 
                                    v-model="v$.message.$model" 
                                    class="form-control" 
                                    name="message" 
                                    id="message" 
                                    rows="5"
                                    placeholder="Leave your comments here">
                                </textarea>
                                <span 
                                    v-for="error in v$.message.$errors"
                                    :key="error.$uid"
                                    >
                                    {{error.$message}}
                                </span>
                                    <div class="form-check">
                                            
                                            <label class="form-check-label" for="flexCheckChecked" style="text-align: left;">
                                                <input class="form-check-input" type="checkbox" id="flexCheckChecked " v-model='v$.checkbox.$model' :checked="checked" > 
                                                </input>
                                                I agree with the terms of conditions
                                            </label>
                                            <span v-if="!checkbox" style="color:red">Need confirm</span>
                                    </div>
                                <span >
                                    
                                </span>
                                </div>
                                    <pre>
                                     
                                    </pre>
                            </div>
                            

    
                            <div class="row">
                                <div class="col">
                                    <button class="btn btn-outline-dark send-btn">Send us</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
import NavBarComponent from '@/components/NavBarComponent.vue';
import ProductCard from '@/components/ProductCard.vue'
import useVuelidate  from '@vuelidate/core'
import { required, email, maxLength } from '@vuelidate/validators'
import { helpers } from '@vuelidate/validators'
import { minLength } from '../validators/minLength';


export default {
    setup() {
        return { v$: useVuelidate() }
    },
    data() {
        return{
            name: '',
            email: '',
            phone: '',
            message: '',
            checkbox: true,
            
            }
    },
    components: {NavBarComponent, ProductCard},
    validations() {
        return {∏
            name: { required },
            email: { required, email },
            phone: {  },
            checkbox: { required },
            message: { 
                required,
                maxLength: maxLength(20),
                minLength: helpers.withMessage('this message min 5', minLength)
            },
        }
    },
    methods: {
        async submit() {
            const isFormCorrect = await this.v$.$validate()
            if (!isFormCorrect) return alert('Need fill all requared fields')
            else  alert('Your message fill send. Thank you')
            this.name = ''
            this.email = ''
            this.phone = ''
            this.message = ''

            console.log(
                {
                    name: this.name,
                    email: this.email,
                    phone: this.phone,
                    message: this.message,
                    textArea
                }
            );
        }
    },
}


</script>