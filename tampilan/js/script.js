// Start of JavaScript Coding...

const { createApp } = Vue;

createApp({
  data() {
    return {
      cards: [
        {
          id: 1,
          title: "Holo En",
          desc:
            "In different heights and shapes, the four versions of Floema low tables offer a variety of surfaces to satisfy different needs and uses in a contract environment, from work to moments of relaxation.",
          photo:
            "img/hololive_en_g1_by_kevintower_devfli9 (1).png"
        },
        {
          id: 2,
          title: "Gawr Gura",
          desc:
            "The Circle Coffee table from Wendelbo emulates almost a visual trick. A frame where mass and gravity is suspended, and the slim and delicate structure support the marble top, like a hovering platform.",
          photo:
            "img/gawr_gura.jpg"
        },
        {
          id: 3,
          title: "Amelia Watson",
          desc:
            "With an appearance that is at once light and elegant, the Workshop Coffee Table fits perfectly into any living room, serving as a traditional coffee table as well as side table.",
          photo:
            "img/amelia_watson.jpg"
        },
        {
          id: 4,
          title: "Mori Calliope",
          desc:
            "Made from sustainably sourced solid American Oak, the Duo Table is composed of two seperate tops joined together on one side. The tops are solid and carved out to create a gentle lip. ",
          photo:
            "img/mori_calliope.png"
        },
        {
          id: 5,
          title: "Takanashi Kiara",
          desc:
            "An idol whose dream is to become the owner of a fast food chain. Kiara is a phoenix, not a chicken or turkey. (Very important)",
          photo:
            "img/takanashi_kiara.jpg"
        },
        {
          id: 6,
          title: "Ninomae Ina’nis",
          desc:
            "Despite her looks, Ina'nis is actually a priestess of the Ancient Ones. One day, she picked up a strange book and then started to gain the power of controlling tentacles. To her, tentacles are just a part in her ordinary life; it has never been a big deal for her. However, her girly mind does want to get them dressed up and stay pretty.",
          photo:
            "img/ninomae_ina_nis.jpg"
        }
      ],
      currentNum: 0
    };
  },
  computed: {
    currentCard() {
      return this.cards[this.currentNum];
    }
  },
  methods: {
    playFoward() {
      let tl = gsap.timeline({
        defaults: {
          duration: 0.5,
          ease: "sine.out"
        },
        onComplete: () => {
          this.playReverse();
          if (this.currentNum >= 5) {
            this.currentNum = 0;
          } else {
            this.currentNum++;
          }
        }
      });
      tl.to("#mask-1", {
        yPercent: 100,
        scaleY: 1.4
      })
        .to(
          "#mask-2",
          {
            yPercent: -100,
            scaleY: 1.4
          },
          "<"
        )
        .to(
          "#kartu-info-title",
          {
            clipPath: `polygon(0 0, 100% 0, 100% 0%, 0% 0%)`
          },
          "<0.4"
        )
        .to(
          "#kartu-info-desc",
          {
            duration: 0.1,
            clipPath: `polygon(0 0, 10% 0, 10% 0%, 0% 0%)`
          },
          "<0.3"
        );
    },
    playReverse() {
      let tl = gsap.timeline({
        defaults: {
          duration: 0.5,
          ease: "sine.in"
        }
      });
      tl.to("#mask-1", {
        yPercent: -100,
        scaleY: 1.4
      })
        .to(
          "#mask-2",
          {
            yPercent: 100,
            scaleY: 1.4
          },
          "<"
        )
        .to(
          "#kartu-info-title",
          {
            clipPath: `polygon(0 0, 100% 0, 100% 100%, 0% 100%)`
          },
          "<0.2"
        )
        .to(
          "#kartu-info-desc",
          {
            duration: 0.1,
            clipPath: `polygon(0 0, 100% 0, 100% 100%, 0% 100%)`
          },
          "<0.3"
        );
    },
    nextCard() {
      this.playFoward();
    }
  }
}).mount("#app");

// END of JavaScript Coding...