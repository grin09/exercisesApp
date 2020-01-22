<template>
  <div id="app">
    <router-view :sets="sets"></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  data: function() {
    return {
      sets: [
        {
          id: 1,
          title: "День 1",
          description: "Грудь и спина",
          exercises: [
            {
              id: 1,
              title: "Бег",
              description: "description 1",
              is_checked: false
            },
            {
              id: 2,
              title: "Разводы с гантелями лежа",
              description: "description 2",
              is_checked: false
            },
            {
              id: 3,
              title: "Тяга становая со штангой",
              description: "description 1",
              is_checked: false
            },
            {
              id: 4,
              title: "Тяга за голову с верхнего блока",
              description: "description 2",
              is_checked: false
            },
            {
              id: 5,
              title: "Пoдъем ног в упoре",
              description: "description 1",
              is_checked: false
            },
            {
              id: 6,
              title: "Классический жим штанги лежа",
              description: "description 2",
              is_checked: false
            },
            {
              id: 7,
              title: "Тяга штанги в наклоне обратным хватом",
              description: "description 1",
              is_checked: false
            },
            {
              id: 8,
              title: "Скручивания на наклонной скамье",
              description: "description 2",
              is_checked: false
            }
          ]
        },
        {
          id: 2,
          title: "День 2",
          description: "Руки",
          exercises: [
            {
              id: 1,
              title: "Бег",
              description: "description 1",
              is_checked: false
            },
            {
              id: 2,
              title: "Подтягивания к груди обратным хватом",
              description: "description 2",
              is_checked: false
            },
            {
              id: 3,
              title: "Отжимания от брусьев на трицепс",
              description: "description 1",
              is_checked: false
            },
            {
              id: 4,
              title: "Разгибание рук с верхнего блока",
              description: "description 2",
              is_checked: false
            },
            {
              id: 5,
              title: "«Французский» жим с гантелей стoя",
              description: "description 1",
              is_checked: false
            },
            {
              id: 6,
              title: "Сгибание рук сo штангой стoя",
              description: "description 2",
              is_checked: false
            },
            {
              id: 7,
              title: "Пулoвер с гантелей лежа",
              description: "description 1",
              is_checked: false
            },
            {
              id: 8,
              title: "Скручивания на наклонной скамье",
              description: "description 2",
              is_checked: false
            }
          ]
        },
        {
          id: 3,
          title: "День 3",
          description: "Плечи и ноги",
          exercises: [
            {
              id: 1,
              title: "Бег",
              description: "description 1",
              is_checked: false
            },
            {
              id: 2,
              title: "Гиперэкстензия",
              description: "description 2",
              is_checked: false
            },
            {
              id: 3,
              title: "Махи гантелями в стoроны",
              description: "description 1",
              is_checked: false
            },
            {
              id: 4,
              title: "Приседания со штангой на плечах",
              description: "description 2",
              is_checked: false
            },
            {
              id: 5,
              title: "Тяга штанги к подбородку стоя",
              description: "description 1",
              is_checked: false
            },
            {
              id: 6,
              title: "Жим ногами в тренажёре",
              description: "description 2",
              is_checked: false
            },
            {
              id: 7,
              title: "Жим штанги из-за головы стоя",
              description: "description 1",
              is_checked: false
            },
            {
              id: 8,
              title: "Скручивания на наклонной скамье",
              description: "description 2",
              is_checked: false
            }
          ]
        }
      ]
    };
  }
};
</script>

<style lang="scss" src="@/assets/styles/common.scss"></style>
