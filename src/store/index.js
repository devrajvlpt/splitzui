import Vue from 'vue'
import Vuex from 'vuex'
import {HTTP} from '../axios-common'

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    topics:[],    
    topic:{},
    sub_topics:[],
    splitz_details:0,
    user:{},
  },
  mutations: {
    SET_TOPICS(state, topics){
      state.topics = topics;
    },
    SET_TOPIC(state, topic){
      state.topic = topic;
    },
    SET_SUBTOPICS(state, sub_topics){
      state.sub_topics = sub_topics;
    },
    SET_SPLITZ(state, splitz_details){
      state.splitz_details = splitz_details;
    },
    SET_USER(state, user){
      state.user = user;
    }
  },
  actions: {
    // List all the topics for the currentuser
    loadTopics({commit}){
      HTTP.get('v1/api/topic', 
        {
          handlerEnabled: true
        }
        ).
        then(response => response.data).
        then(topics => {
          commit('SET_TOPICS', topics)
        })
    },
    // Load Topic based on id
    loadTopicById({commit}, topic_id){      
      HTTP.get('v1/api/topicdetail/' + topic_id + '/',
      {
        handlerEnabled: true
      }
      ).
      then(response => response.data)
      .then(topic => {
        commit('SET_TOPIC', topic)
      })
    },
    loadSubTopics({commit}){
      HTTP.get('v1/api/subsection', 
      {
        handlerEnabled: true
      }
      ).
      then(response => response.data).
      then(sub_topics => {
        commit('SET_SUBTOPICS', sub_topics)
      })
    },
    loadSubTopicId ({commit}, sub_topic_id){
      HTTP.get('v1/api/subsection/' + sub_topic_id + '/', 
      {
        handlerEnabled: true
      }
      ).
      then(response => response.data).
      then(sub_topic => {
        commit('SET_SUBTOPICS', sub_topic)
      })
    },
    loadSplitz({commit}, topic_id){
      HTTP.get('v1/api/splitz/' + topic_id,
      {
        handlerEnabled: true
      }
      )
      .then(response => response.data)
      .then(splitz_details => {
        commit('SET_SPLITZ', splitz_details)
      })
    },
    loadUser({commit}, user_id){
      HTTP.get('v1/api/user/' + user_id,
      {
        handlerEnabled: true
      }
      )
      .then(response => response.data)
      .then(user => {
        commit('SET_USER', user)
      }
      )
    }
    
  },
  modules: {
  }
})
