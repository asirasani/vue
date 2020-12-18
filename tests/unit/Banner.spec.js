import { shallowMount } from "@vue/test-utils";
import LoyaltyRewards from '@/components/Banner/LoyaltyRewards.vue'

describe("LoyaltyRewards", () => {
  let bannerComponent;
  describe("when auto enrollment status is 'autoEnrollRequested'", () => {
    beforeEach(() => {
      bannerComponent = shallowMount(LoyaltyRewards, {
        propsData: {
          autoEnrollmentStatus: "autoEnrollRequested",
        },
      });
    });
    it("shows the correct header", () => {
      expect(bannerComponent.find(".header").text()).toBe("The Key Rewards")
    });
    it("shows the correct description", () => {
      expect(bannerComponent.find(".headerContent").text()).toBe("You're almost done. We received your request and will create your rewards account. We will send you an email shortly to complete your enrollment and access your rewards online.")
    });
  });

  describe("when auto enrollment status is 'confirmedUserAutoEnroll'", () => {
    beforeEach(() => {
      bannerComponent = shallowMount(LoyaltyRewards, {
        propsData: {
          autoEnrollmentStatus: "confirmedUserAutoEnroll",
        },
      });
    });
    it("shows the correct Title", () => {
      expect(bannerComponent.find(".header").text()).toBe("Welcome to The Key Rewards!")
    });
    it("shows the correct description", () => {
      expect(bannerComponent.find(".headerContent").text()).toBe("Every time you shop in stores and online, use your registered phone number to earn rewards. You can now access your rewards online.")
    });
  });

  describe("when auto enrollment status is 'guestUserAutoEnroll'", () => {
    beforeEach(() => {
      bannerComponent = shallowMount(LoyaltyRewards, {
        propsData: {
          autoEnrollmentStatus: "guestUserAutoEnroll",
        },
      });
    });
    it("shows the correct Title", () => {
      expect(bannerComponent.find(".header").text()).toBe("Welcome to The Key Rewards!")
    });
    it("shows the correct description", () => {
      expect(bannerComponent.find(".headerContent").text()).toBe("You're almost done. Check your email to complete your enrollment and access your rewards online.")
    });
  });

  describe("when auto enrollment status is 'nonConfirmUserAutoEnroll'", () => {
    beforeEach(() => {
      bannerComponent = shallowMount(LoyaltyRewards, {
        propsData: {
          autoEnrollmentStatus: "nonConfirmUserAutoEnroll",
        },
      });
    });
    it("shows the correct Title", () => {
      expect(bannerComponent.find(".header").text()).toBe("Welcome to The Key Rewards!")
    });
    it("shows the correct description", () => {
      expect(bannerComponent.find(".headerContent").text()).toBe("You're almost done. Check your email to complete your enrollment and access your rewards online.")
    });
  });
});