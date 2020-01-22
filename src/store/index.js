import Vue from 'vue'
import Vuex from 'vuex'
import {HTTP} from '../axios-common'

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    topics:[],
    topic:{},
    splitz:0
  },
  mutations: {
    SET_TOPICS(state, topics){
      state.topics = topics;
    },
    SET_TOPIC(state, topic){
      state.topic = topic
    },
    SET_SPLITZ(state, splitz){
      state.splitz = splitz
    }
  },
  actions: {
    // List all the topics for the currentuser
    loadTopics({commit}){
      HTTP.get('v1/api/topic').
        then(response => response.data).
        then(topics => {
          commit('SET_TOPICS', topics)
        })
    },
    // Load Topic based on id
    loadTopicById({commit}, topic_id){      
      HTTP.get('v1/api/topicdetail/' + topic_id + '/').
      then(response => response.data)
      .then(topic => {
        commit('SET_TOPIC', topic)
      })
    },

    loadSplitz({commit}, topic_id){
      HTTP.get('v1/api/splitz/' + topic_id)
      .then(response => response.data.length)
      .then(splitz => {
        commit('SET_SPLITZ', splitz)
      })
    }
    
  },
  modules: {
  }
})
