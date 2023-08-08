<template>
  <div class="generalUserDashboard">
    <NavbarDashboard></NavbarDashboard>
    <div class="mainArea">
      <c-flex>
        <!-- <div class="userCardSpace">
          <UserCard></UserCard>
        </div>
        <div class="mainArea">
          <NotificationCard></NotificationCard>
          <EventCard></EventCard>
        </div> -->
        <c-box w="20%" class="userCardSpace">
          <UserCard></UserCard>
        </c-box>
        <c-box w="60%" class="eventCardSpace">
          <carousel :perPage="2" :navigationEnabled="true">
            <slide><EventCard></EventCard></slide>
            <slide><EventCard></EventCard></slide>
            <slide><EventCard></EventCard></slide>
          </carousel>
        </c-box>
        <c-box w="20%" class="notificationSpace">
          <NotificationCard></NotificationCard>
        </c-box>
      </c-flex>
    </div>
  </div>
</template>

<script>
import UserCard from "../Cards/UserCard.vue";
import NotificationCard from "../Cards/NotificationCard.vue";
import EventCard from "../Cards/EventCard.vue";
import NavbarDashboard from "./NavbarDashboard.vue";
import { Carousel, Slide } from "vue-carousel";

import axios from "axios";
export default {
  components: {
    UserCard,
    NotificationCard,
    EventCard,
    Carousel,
    Slide,
    NavbarDashboard,
  },
  data() {
    return {
      firstName: "",
      lastName: "",
      userType: "",
    };
  },
  methods: {},
  async created() {
    try {
      const token = sessionStorage.getItem("token");
      const res = await axios.get("/api/user", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res) {
        console.log(res);
      }
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style>
.generalUserDashboard {
}
.userCardSpace {
}

.eventCardSpace {
  margin-left: 25px;
  margin-right: 25px;
}

.notificationSpace {
}

.mainArea {
  margin: 20px;
}
</style>
