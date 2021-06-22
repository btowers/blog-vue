export default {
  AppActiveUser: { firstName: '', lastName: '', activeMeliID: null, ability: null },

  AppActiveMeli: {
    id: null,
    nickname: null,
    competitors: [],
    seller_reputation: null,
    settings: {
      locale: 'es',
      questions: {
        autoReply: { greetings: [], fixed: [], aditional: [], schedule: [] }
      }
    }
  }
}
