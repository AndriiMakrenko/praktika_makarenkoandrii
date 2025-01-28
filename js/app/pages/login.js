export const login = {
    data() {
      return {
        img: 1,
        hs: 0,
        parent: ''
      };
    },
    mounted() {
      this.img = this.randomIntFromInterval(1, 7);
      this.parent = this.$parent?.parent;
    },
    methods: {
      randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
    },
    template: `
      <div class="flex">
        Log in Site
      </div>
    `
  };
  