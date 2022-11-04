<template>
  <div>
    <div v-for="colorList in colorsLocal" :key="colorList.title" class="colorDefinition">
      <div class="colorsList" :class="{ [colorList.class]: colorList.class }">
        <div class="colorsList__row">
          <h2 class="colorsList__title">{{ colorList.title }}</h2>
          <ol class="colorsList__categories">
            <li
                v-for="(colors, colorCategory) in colorList.list"
                :key="colorCategory"
                class="colorsDefinition__category"
            >
              {{ colorCategory }}
            </li>
          </ol>
        </div>
        <div
            v-for="(colors, colorCategory) in colorList.list"
            :key="colorCategory"
            class="colorsList__row"
        >
          <h3 :id="'category-' + colorCategory">{{ colorCategory }}</h3>
          <div v-for="color in colors" :key="color.id" class="colorDefinition">
            <div class="colorDefinition__id">{{ color.label }}</div>
            <div class="colorDefinition__value">{{ color.value }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.colorsList {
  margin: 0 auto;
  width: 80%;

  &__title {
    margin-top: 0;
  }

  &__row {
    border: 1px solid #f3f2f2;
    margin-bottom: 20px;
    padding: 20px 20px;
  }

  &__categories {
    line-height: 1.5em;
  }
}

.colorDefinition {
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;

  &__id,
  &__value,
  &__color {
    min-width: 200px;
    padding: 10px;
  }

  &__color {
    flex: 3 1 auto;
    width: 200px;
  }

  &__tile {
    box-shadow: rgb(0 0 0 / 10%) 0 1px 3px 0;
    display: block;
    height: 40px;
    width: 100%;
  }

  &__value {
    color: #707070;
    flex: 1 1 auto;
    width: 200px;
  }

  &__id {
    flex: 1 1 auto;
    width: 200px;
  }
}
</style>

<script lang="ts">
export default {
  name: 'TypographyList',
  props: {
    colorsLists: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      colorsLocal: this.colorsLists,
    };
  },
  mounted() {
    this.colorsLocal.forEach((list, index) => {
      if (list.disabled) {
        for (let key in list.list) {
          if (key === list.disabled) {
            this.colorsLocal[index].list[key] = null;
            delete this.colorsLocal[index].list[key];
          }
        }
      }
    });
  },
  methods: {
    canBeDisplayed(category: string, disableDefault: boolean) {
      return !(category === 'default' && disableDefault);
    },
  },
};
</script>
