<template>
  <div class="col-12 d-flex align-items-center justify-content-center row p-0 m-0">

    <div class="col-8 my-4">
      <v-expansion-panels class="col-12" >
        <v-expansion-panel>
          <v-expansion-panel-title>
            <template v-slot:default="{ expanded }">
              <v-row no-gutters>
                <v-col class="d-flex justify-start" cols="4">
                  Search
                </v-col>
              </v-row>
            </template>
          </v-expansion-panel-title>
          <v-expansion-panel-text>
            <v-form @submit.prevent class="col-5">
              <v-text-field
                  label="Search Name or Family"
                  v-model="searchHero"
              ></v-text-field>
            </v-form>
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>

    </div>
    <div class="col-1 my-4">
      <v-dialog max-width="400">
        <template v-slot:activator="{ props: activatorProps }">
          <v-btn
              v-bind="activatorProps"
              text="Add User"
              color="primary"
              class="mx-1"
              append-icon="mdi-plus" size="small"
          ></v-btn>
        </template>

        <template v-slot:default="{ isActive }">
          <v-card title="Add user">
            <div class="col-12 h-100 p-4 row m-0">
              <div class="col-6">
                <label>Name</label><br>
                <v-text-field @keydown="checkerChange"  id="add_name" class="my-2" ></v-text-field>
              </div>
              <div class="col-6">
                <label>Family</label><br>
                <v-text-field @keydown="checkerChange" id="add_family" class="my-2" ></v-text-field>

              </div>
              <div class="col-5 my-2">
                <label>Age</label><br>
                <v-text-field @keydown="checkerChange" id="add_age" class="my-2" ></v-text-field>
              </div>
            </div>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                  text="Close"
                  variant="tonal"
                  color="danger"
                  class="p-3 text-center d-flex align-items-center justify-content-center"
                  @click="isActive.value = false"
              ></v-btn>
              <v-btn
                  text="Submit"
                  variant="outlined"
                  color="success"
                  :disabled="!edited"
                  class="p-3 text-center d-flex align-items-center justify-content-center"
                  @click="addUser();isActive.value = false;"
              ></v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
    </div>
    <div class="col-1 ">
      <v-switch
          v-model="useMainStore().theme"
          :label="useMainStore().theme"
          hide-details
          inset
          color="info"
          false-value="dark"
          true-value="light"
      ></v-switch>
    </div>

    <v-table class="col-10" fixed-header>
      <thead >
      <tr>
        <th>
          Row
        </th>
        <th>
          Name
        </th>
        <th>
          Family
        </th>
        <th>
          Age
        </th>
        <th>
          Options
        </th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item, key) in filterSearch" :key="key" >
        <td>{{ key+1 }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.family }}</td>
        <td>{{ item.age }}</td>
        <td>
          <v-dialog max-width="500">
            <template v-slot:activator="{ props: activatorProps }">
              <v-btn
                  v-bind="activatorProps"
                  text="Edit"
                  variant="tonal"
                  color="orange"
                  class="mx-1"
              ></v-btn>
            </template>

            <template v-slot:default="{ isActive }">
              <v-card title="Edit info user">
                <div class="col-12 h-100 p-4 row m-0">
                  <div class="col-6">
                    <label>Name</label><br>
                    <v-text-field @keydown="checkerChange" :model-value="item.name" class="my-2" id="name"></v-text-field>
                  </div>
                  <div class="col-6">
                    <label>Family</label><br>
                    <v-text-field @keydown="checkerChange" :model-value="item.family" class="my-2" id="family"></v-text-field>

                  </div>
                  <div class="col-5 my-2">
                    <label>Age</label><br>
                    <v-text-field @keydown="checkerChange" :model-value="item.age" class="my-2" id="age"></v-text-field>
                  </div>
                </div>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                      text="Close"
                      variant="tonal"
                      color="danger"
                      class="p-3 text-center d-flex align-items-center justify-content-center"
                      @click="isActive.value = false"
                  ></v-btn>
                  <v-btn
                      text="Submit"
                      variant="outlined"
                      color="success"
                      :disabled="!edited"
                      class="p-3 text-center d-flex align-items-center justify-content-center"
                      @click="editUser(key);isActive.value = false"
                  ></v-btn>
                </v-card-actions>
              </v-card>
            </template>
          </v-dialog>
          <v-dialog max-width="400">
            <template v-slot:activator="{ props: activatorProps }">
              <v-btn
                  v-bind="activatorProps"
                  text="Delete"
                  variant="tonal"
                  color="red"
                  class="mx-1"
              ></v-btn>
            </template>

            <template v-slot:default="{ isActive }">
              <v-card title="Delete user">
                <div class="col-12 h-100 p-4 row m-0">
                  <span class="p-0 m-0 fw-bold text-danger">Are you sure to delete this information?</span>
                </div>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                      text="NO"
                      variant="tonal"
                      color="danger"
                      class="p-3 text-center d-flex align-items-center justify-content-center"
                      @click="isActive.value = false"
                  ></v-btn>
                  <v-btn
                      text="YES"
                      variant="outlined"
                      color="success"
                      class="p-3 text-center d-flex align-items-center justify-content-center"
                      @click="useMainStore().deleteUser(key);isActive.value = false"
                  ></v-btn>
                </v-card-actions>
              </v-card>
            </template>
          </v-dialog>
          <v-dialog max-width="800">
            <template v-slot:activator="{ props: activatorProps }">
              <v-btn
                  v-bind="activatorProps"
                  text="Chart"
                  variant="tonal"
                  color="info"
                  class="mx-1"
              ></v-btn>
            </template>

            <template v-slot:default="{ isActive }">
              <v-card title="info Chart">
                <div class="col-12 h-100 p-4 row m-0">
                  <div>
                    <chart></chart>
                  </div>
                </div>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                      text="NO"
                      variant="tonal"
                      color="danger"
                      class="p-3 text-center d-flex align-items-center justify-content-center"
                      @click="isActive.value = false"
                  ></v-btn>
                  <v-btn
                      text="YES"
                      variant="outlined"
                      color="success"
                      class="p-3 text-center d-flex align-items-center justify-content-center"
                      @click="useMainStore().deleteUser(key);isActive.value = false"
                  ></v-btn>
                </v-card-actions>
              </v-card>
            </template>
          </v-dialog>
          <v-dialog max-width="800">
            <template v-slot:activator="{ props: activatorProps }">
              <v-btn
                  v-bind="activatorProps"
                  text="GPS"
                  variant="tonal"
                  color="green"
                  class="mx-1"
              ></v-btn>
            </template>

            <template v-slot:default="{ isActive }">
              <v-card title="info Location">
                <div class="col-12 h-100 p-4 row m-0">
                  <div class="map-box">
                    <mapbox></mapbox>
                  </div>
                </div>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                      text="Close"
                      variant="tonal"
                      color="danger"
                      class="p-3 text-center d-flex align-items-center justify-content-center"
                      @click="isActive.value = false"
                  ></v-btn>
                </v-card-actions>
              </v-card>
            </template>
          </v-dialog>
        </td>
      </tr>
      </tbody>
    </v-table>
  </div>
</template>
<script>
import {useMainStore} from "/store/index.js";
import $ from 'jquery'
import Chart from "/components/chart.vue";
export default {
  components: {Chart},
  methods: {
    useMainStore,
    checkerChange(){
      this.edited = true
    },
    editUser(key){
      this.user.name = $('input[id="name"]').val()
      this.user.family = $('input[id="family"]').val()
      this.user.age = $('input[id="age"]').val()

      useMainStore().editUser(this.user,key)
      this.edited = false
    },
    addUser(){
      let user = {
        name :$('input[id="add_name"]').val(),
        family: $('input[id="add_family"]').val(),
        age: $('input[id="add_age"]').val()
      }
      useMainStore().addUser(user)
      this.edited = false
    }
  },

  data(){
    return{
      edited : false,
      user:{
        name: '',
        family : '',
        age: '',
      },
      searchHero : '',
    }
  },
  computed: {
    filterSearch() {
      let users = []
      users = useMainStore().users
      return users.filter( User => {
        return !this.searchHero ||
            User.name.toLowerCase().indexOf(this.searchHero.toLowerCase()) > -1  ||
            User.family.toLowerCase().indexOf(this.searchHero.toLowerCase()) > -1
      })
    }
  }
}
</script>
<style>
.map-box{
  width: 40rem;
  height: 20rem;
}
</style>
