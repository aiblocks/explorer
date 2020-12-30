const networks = {
  public: 'public',
  test: 'test',
  local: 'local',
}

const hostnameToNetworkType = hostname => {
  if (hostname === 'explorer.aiblocks.io' || hostname === 'publicnet.local')
    return networks.public
  else if (hostname === 'explorer-testnet.aiblocks.io' || hostname === 'testnet.local')
    return networks.test
  else return networks.local
}

export {networks as default, hostnameToNetworkType}
