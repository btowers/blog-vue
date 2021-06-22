/*=========================================================================================

  File Name: moduleUserGetters.js
  Description: User Module Getters
  
==========================================================================================*/

export default {
  getOption: state => optionTitle =>
    state.AppActiveUser.settings.questions.autoReply.find(option => option.title === optionTitle),

  userReputation(state) {
    let reputation = {
      red: {
        icon: 'mdi-radio-button-unchecked',
        color: '#EA5455'
      },
      orange: {
        icon: 'mdi-radio-button-unchecked',
        color: '#FF9F43'
      },
      yellow: {
        icon: 'mdi-radio-button-unchecked',
        color: '#FFEA43'
      },
      lightGreen: {
        icon: 'mdi-radio-button-unchecked',
        color: '#5DDE97'
      },
      green: {
        icon: 'mdi-radio-button-unchecked',
        color: '#28C76F'
      },

      metrics: [
        {
          index: 0,
          title: 'Ventas',
          msg: 'Últimos 3 meses',
          icon: 'mdi-check-circle-outline',
          time: 0,
          color: 'green darken-2'
        },
        {
          index: 1,
          title: 'Envíos con Demora',
          msg: 'Mantente siempre debajo del 15%',
          icon: 'mdi-check-circle-outline',
          time: 0,
          color: 'green darken-2'
        },
        {
          index: 2,
          title: 'Ventas Canceladas',
          msg: 'Mantente siempre debajo del 3%',
          icon: 'mdi-check-circle-outline',
          time: 0,
          color: 'green darken-2'
        },
        {
          index: 3,
          title: 'Reclamos',
          msg: 'Mantente siempre debajo del 2%',
          icon: 'mdi-check-circle-outline',
          time: 0,
          color: 'green darken-2'
        }
      ]
    }

    if (state.AppActiveMeli.seller_reputation) {
      reputation.metrics[0].time = state.AppActiveMeli.seller_reputation.metrics.sales.completed
      reputation.metrics[1].time =
        state.AppActiveMeli.seller_reputation.metrics.delayed_handling_time.rate * 100 + ' % '
      reputation.metrics[2].time =
        state.AppActiveMeli.seller_reputation.metrics.cancellations.rate * 100 + ' % '
      reputation.metrics[3].time = state.AppActiveMeli.seller_reputation.metrics.claims.rate * 100 + ' % '

      if (state.AppActiveMeli.seller_reputation.level_id == '5_green') {
        reputation.green = {
          icon: 'mdi-radio-button-checked',
          color: '#28C76F'
        }
      } else if (state.AppActiveMeli.seller_reputation.level_id == '4_green') {
        reputation.green = {
          icon: 'mdi-radio-button-checked',
          color: '#28C76F'
        }
      } else if (state.AppActiveMeli.seller_reputation.level_id == '3_green') {
        reputation.green = {
          icon: 'mdi-radio-button-checked',
          color: '#28C76F'
        }
      } else if (state.AppActiveMeli.seller_reputation.level_id == '2_orange') {
        reputation.green = {
          icon: 'mdi-radio-button-checked',
          color: '#FF9F43'
        }
      } else if (state.AppActiveMeli.seller_reputation.level_id == '1_red') {
        reputation.green = {
          icon: 'mdi-radio-button-checked',
          color: '#EA5455'
        }
      }
    }
    return reputation
  }
}
