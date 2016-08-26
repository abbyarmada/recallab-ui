import config from '12factor-config';

var configSettings = {
  auth0_client_id: {
    env: 'RECALLAB_AUTH0_CLIENTID',
    type: 'string',
    required: true
  },
  auth0_domain: {
    env: 'RECALLAB_AUTH0_DOMAIN',
    type: 'string',
    required: true
  },
  api_url: {
    env: 'RECALLAB_API_URL',
    type: 'string',
    required: true
  }
};

const cfg = config(configSettings);

export default cfg;
