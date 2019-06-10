<template>
  <div class="emailModal">
    <div class="emailHead" v-if="notSent">Send E-mail</div>
    <div class="emailModal__content">
      <div v-if="notSent">
        <input
          class="emailModal__field"
          v-model="emailAddress"
          name="emailAddress"
          type="email"
          placeholder="Email"
          multiple
          :class="{highlighted: !oneFilledEmail}"
          @change="validateEmail()"
        >
        <input
          class="emailModal__field"
          v-model="emailCC"
          name="emailCCAddress"
          type="email"
          placeholder="CC"
          multiple
          value
          :class="{highlighted: !oneFilledEmail}"
          @change="validateEmail()"
        >
        <input
          class="emailModal__field"
          v-model="emailBCC"
          name="emailBCCAddress"
          type="email"
          placeholder="BCC"
          multiple
          value
          :class="{highlighted: !oneFilledEmail}"
          @change="validateEmail()"
        >
        <input
          class="emailModal__field"
          v-model="emailSubject"
          name="emailSubject"
          type="text"
          placeholder="Subject"
          :class="{highlighted: !filledSubject}"
          @change="validateSubject()"
        >
        <textarea
          class="emailModal__inputField"
          v-model="emailMessage"
          placeholder="Message"
          :class="{highlighted: !filledMessage}"
          @change="validateMessage()"
          required
        ></textarea>
        <div class="inputFile">
          <input
            id="inputFile"
            type="file"
            name="file"
            ref="myFiles"
            class="realAtachButton"
            @change="previewFiles"
            multiple
          >
          <button for="file" class="attachButton">
            <i class="fas fa-paperclip"></i>
          </button>
        </div>

        <button
          id="sendButton"
          class="sendButton"
          :class="{activeSend: sendable}"
          :disabled="sendable == false"
          @click="sendEmail()"
        >
          <i class="fas fa-arrow-right"></i>Send
        </button>
        <div class="emailAttachments">
          <ul id="attachmentList" class="attachmentList">
            <li v-for="(attachment, index) of attachments" :key="index">
              <img :src="attachment">
              <div class="attachmentList__delete" @click="deleteAttachment(index)">
                <div class="attachmentList__delete--binButton">
                  <i class="fas fa-trash"></i>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="emailSent" v-else>
        <div class="emailSent__confirmationTick">
          <i class="fas fa-check-circle"></i>
          Your email has been sent
        </div>
        <hr>
        <div class="emailSent__contentBox">
          <div class="emailSent__contentBox--title">{{ emailSubject }}</div>
          <div>
            <div v-if="emailAddress[0] !== ''" class="emailSent__contentBox--recipient">
              to:
              <span v-for="(email, index) of emailAddress" :key="index">{{ email }},</span>
            </div>
            <div v-if="emailCC[0] !== ''" class="emailSent__contentBox--recipient">
              CC:
              <span v-for="(CC, index) of emailCC" :key="index">{{ CC }},</span>
            </div>
            <div v-if="emailBCC[0] !== ''" class="emailSent__contentBox--recipient">
              BCC:
              <span v-for="(BCC, index) of emailBCC" :key="index">{{ BCC }},</span>
            </div>
            <div class="emailSent__contentBox--message">{{ emailMessage }}</div>
          </div>
          <ul class="attachmentList">
            <li v-for="(attachment, index) of attachments" :key="index">
              <img :src="attachment">
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    let notSent = true;
    let emailAddress = "";
    let emailCC = "";
    let emailBCC = "";
    let emailSubject = "";
    let emailMessage = "";
    let oneFilledEmail = true;
    let filledSubject = true;
    let filledMessage = true;
    let attachments = [
      "https://image.shutterstock.com/image-illustration/fantasy-fairy-forest-260nw-1037092090.jpg",
      "https://junkee.com/wp-content/uploads/2014/06/SLJ.jpg"
    ];

    return {
      notSent,
      emailAddress,
      emailCC,
      emailBCC,
      emailSubject,
      emailMessage,
      oneFilledEmail,
      filledSubject,
      filledMessage,
      attachments
    };
  },
  methods: {
    previewFiles() {
      this.attachments.push(this.$refs.myFiles.value);
    },
    validateEmail() {
      if (
        (this.emailAddress !== "" && this.emailAddress.includes("@")) ||
        ((this.emailCC !== "" && this.emailCC.includes("@")) ||
          (this.emailBCC !== "" && this.emailCC.includes("@")))
      ) {
        this.oneFilledEmail = true;
      } else {
        this.oneFilledEmail = false;
      }
    },
    validateSubject() {
      if (this.emailSubject === "") {
        this.filledSubject = false;
      } else {
        this.filledSubject = true;
      }
    },
    validateMessage() {
      if (this.emailMessage === "") {
        this.filledMessage = false;
      } else {
        this.filledMessage = true;
      }
    },
    checkArrayValues(array) {
      for (let value of array) {
        if (value.includes("@")) {
        } else {
          this.sendable = false;
        }
      }
    },
    deleteAttachment(index) {
      this.attachments.splice(index, 1);
    },
    sendEmail() {
      this.notSent = false;
    }
  },
  computed: {
    sendable() {
      if (
        (this.emailAddress || this.emailCC || this.emailBCC) &&
        this.emailSubject !== "" &&
        this.emailMessage !== ""
      ) {
        this.emailAddress = this.emailAddress.toString().split(",");
        this.checkArrayValues(this.emailAddress);
        this.emailCC = this.emailCC.toString().split(",");
        this.checkArrayValues(this.emailCC);
        this.emailBCC = this.emailBCC.toString().split(",");
        this.checkArrayValues(this.emailBCC);
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>