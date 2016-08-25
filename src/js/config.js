import config from '12factor-config';

var configSettings = {
  //Storage variables
  auth0_client_id: {
    //There must be a storage driver with the same name in storage/drivers
    env: 'RECALLAB_AUTH0_CLIENTID',
    type: 'string',
    required: true
  },
  auth0_domain: {
    env: 'RECALLAB_AUTH0_DOMAIN',
    type: 'string',
    required: true
  }
};

const cfg = config(configSettings);

export default cfg;
