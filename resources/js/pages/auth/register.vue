<template>
    <main>
        <div class="container">
            <section
                class="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                            <div class="d-flex justify-content-center py-4">
                                <a href="index.html" class="logo d-flex align-items-center w-auto">
                                    <img src="assets/img/logo.png" alt />
                                    <span class="d-none d-lg-block">CoolCART</span>
                                </a>
                            </div>
                            <!-- End Logo -->

                            <div class="card mb-3">
                                <div class="card-body">
                                    <div class="pt-4 pb-2">
                                        <h5 class="card-title text-center pb-0 fs-4">Create an Account</h5>
                                        <p class="text-center small">Enter your personal details to create account</p>
                                    </div>

                                    <form class="row g-3 needs-validation" novalidate
                                        v-on:submit="registerUser($event)">
                                        <div class="col-12">
                                            <label for="yourName" class="form-label">Your Name</label>
                                            <input type="text" name="name" class="form-control" id="yourName"
                                                v-model="form.name" required />
                                            <div class="invalid-feedback">Please, enter your name!</div>
                                        </div>

                                        <div class="col-12">
                                            <label for="yourEmail" class="form-label">Your Email</label>
                                            <input type="email" name="email" class="form-control" id="yourEmail"
                                                v-model="form.email" required />
                                            <div class="invalid-feedback">Please enter a valid Email adddress!</div>
                                        </div>

                                        <div class="col-12">
                                            <label for="yourUsername" class="form-label">Username</label>
                                            <div class="input-group has-validation">
                                                <span class="input-group-text" id="inputGroupPrepend">@</span>
                                                <input type="text" name="username" class="form-control"
                                                    id="yourUsername" readonly v-model="form.email" required />
                                                <div class="invalid-feedback">Please choose a username.</div>
                                            </div>
                                        </div>

                                        <div class="col-12">
                                            <label for="yourPassword" class="form-label">Password</label>
                                            <input type="password" name="password" class="form-control"
                                                id="yourPassword" v-model="form.password" required />
                                            <div class="invalid-feedback">Please enter your password!</div>
                                        </div>
                                        <div class="col-12">
                                            <label for="yourPassword" class="form-label">Confirm Password</label>
                                            <input type="password" name="password" class="form-control"
                                                id="confirmPassword" v-model="form.c_password" required />
                                            <div class="invalid-feedback">Password and Confirm Password dosen't match.
                                            </div>
                                        </div>

                                        <div class="col-12">
                                            <div class="form-check">
                                                <input class="form-check-input" name="terms" type="checkbox" value
                                                    id="acceptTerms" required />
                                                <label class="form-check-label" for="acceptTerms">
                                                    I agree and accept the
                                                    <a href="#">terms and conditions</a>
                                                </label>
                                                <div class="invalid-feedback">You must agree before submitting.</div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <button class="btn btn-primary w-100" type="submit">Create Account</button>
                                        </div>
                                        <div class="col-12">
                                            <p class="small mb-0">
                                                Already have an account?
                                                <router-link to="/login">Log in</router-link>
                                                <button v-on:click="$router.push('/dashboard')" id="redirectToDashboard"
                                                    class="d-none"></button>
                                            </p>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </main>
</template>

<script>
export default {
    name: "register",
    data() {
        return {
            form: {
                name: "",
                email: "",
                password: "",
                c_password: "",
                role_id: "2"
            }
        };
    },
    methods: {
        registerUser: function (event) {
            event.preventDefault();
            axios
                .post("/api/register", this.form)
                .then(function (response) {
                    if (response.status) {
                        sessionStorage.setItem("AUTHTOKEN", response.data.data.token);
                        document.querySelector("#redirectToDashboard").click();
                    }
                })
                .catch(function (error) { });
        }
    }
};
</script>
