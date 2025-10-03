import request from 'src/service/request.js'

export function CriarTenant (data) {
  return request({
    url: '/tenants/',
    method: 'post',
    data
  })
}

export function ListarTenants () {
  return request({
    url: `/tenants/`,
    method: 'get'
  })
}

export function ListarTenantsEv () {
  return request({
    url: `/tenantsEv/`,
    method: 'get'
  })
}

export function ListarTenantsPk () {
  return request({
    url: `/tenantsPk/`,
    method: 'get'
  })
}

export function ListarTenantsPorLicenca () {
  return request({
    url: `/tenantsValidLicense/`,
    method: 'get'
  })
}

export function ListarTermos() {
  return request({
    url: `/tenantsTerms/`,
    method: 'get'
  })
}

export function ListarTenantsPorTermos () {
  return request({
    url: `/tenantsAcceptTermsList/`,
    method: 'get'
  })
}

export function ListarTenantPorId (id) {
  return request({
    url: `/tenants/${id}`,
    method: 'get'
  })
}

export function ListarTenantsPorAsaas () {
  return request({
    url: `/tenantsAsaas/`,
    method: 'get'
  })
}

export function ListarTenantPorAsaas (data) {
  return request({
    url: `/tenantsAsaas/${data}`,
    method: 'get'
  })
}

export function AlterarTenant (data) {
  return request({
    url: `/tenantsUpdate/${data.id}`,
    method: 'put',
    data
  })
}

export function AlterarTenantAsaasToken (data) {
  return request({
    url: `/tenantsUpdateAsaasToken`,
    method: 'put',
    data
  })
}

export function AlterarTenantMeta (data) {
  return request({
    url: `/tenantsMetaUpdate/${data.id}`,
    method: 'put',
    data
  })
}

export function AlterarServicoTransbordo (data) {
  return request({
    url: `/tenantsServiceTransfer/${data.id}`,
    method: 'put',
    data
  })
}

export function AlterarJanelaWaba (data) {
  return request({
    url: `/tenantsWindowChat/${data.id}`,
    method: 'put',
    data
  })
}

export function AlterarCarteiraExterna (data) {
  return request({
    url: `/tenantsWalletExternal/${data.id}`,
    method: 'put',
    data
  })
}

export function AlterarVisualizacaoGrupos (data) {
  return request({
    url: `/tenantsShowGroupsForAll/${data.id}`,
    method: 'put',
    data
  })
}

export function AlterarIgnorarStories (data) {
  return request({
    url: `/tenantsIgnoreIgStories/${data.id}`,
    method: 'put',
    data
  })
}

export function AlterarDadosAvaliacao (data) {
  return request({
    url: `/tenantsRatingData/${data.id}`,
    method: 'put',
    data
  })
}

export function AlterarVisualizacaoFechados (data) {
  return request({
    url: `/tenantsShowClosedForAll/${data.id}`,
    method: 'put',
    data
  })
}

export function AlterarBaileysMediaPersist (data) {
  return request({
    url: `/tenantsBailesyMediaPersist/${data.id}`,
    method: 'put',
    data
  })
}

export function AlterarPluginAudio (data) {
  return request({
    url: `/tenantsAudioPlugin/${data.id}`,
    method: 'put',
    data
  })
}

export function AlterarModuloAudio (data) {
  return request({
    url: `/tenantsAudioModule/${data.id}`,
    method: 'put',
    data
  })
}

export function AlterarProcessamentoExterno (data) {
  return request({
    url: `/tenantsWaitExternal/${data.id}`,
    method: 'put',
    data
  })
}

export function AlterarEmail (data) {
  return request({
    url: `/tenantsEmail`,
    method: 'put',
    data
  })
}

export function AlterarTenantShowChatbot (data) {
  return request({
    url: `/tenantsShowChatbot/${data.id}`,
    method: 'put',
    data
  })
}

export function AlterarTenantPostmanLink (data) {
  return request({
    url: `/tenantsPostmanLink/${data.id}`,
    method: 'put',
    data
  })
}

export function AlterarTenantControlFeatures (data) {
  return request({
    url: `/tenantsControlFeatures/${data.id}`,
    method: 'put',
    data
  })
}

export function AlterarTenantListByLastMessage (data) {
  return request({
    url: `/tenantsListByLastMessage/${data.id}`,
    method: 'put',
    data
  })
}

export function AlterarTenantForcarRazao (data) {
  return request({
    url: `/tenantsForceReason/${data.id}`,
    method: 'put',
    data
  })
}

export function AlterarTenantForcarLogout (data) {
  return request({
    url: `/tenantsForceLogout/${data.id}`,
    method: 'put',
    data
  })
}

export function AlterarTenantMasterKey (data) {
  return request({
    url: `/tenantsMasterKey/${data.id}`,
    method: 'put',
    data
  })
}


export function AlterarTenantAllowPause (data) {
  return request({
    url: `/tenantsAllowPause/${data.id}`,
    method: 'put',
    data
  })
}

export function AlterarTenantVapiToken (data) {
  return request({
    url: `/tenantsVapiToken/${data.id}`,
    method: 'put',
    data
  })
}

export function AlterarTenantUseUserBusinessHours (data) {
  return request({
    url: `/tenantsUseUserBusinessHours/${data.id}`,
    method: 'put',
    data
  })
}

export function AlterarTenantNullTickets (data) {
  return request({
    url: `/tenantsNullTickets/${data.id}`,
    method: 'put',
    data
  })
}

export function AlterarTenantSMSToken (data) {
  return request({
    url: `/tenantsSMSToken/${data.id}`,
    method: 'put',
    data
  })
}

export function AlterarTenantConectaSMSToken (data) {
  return request({
    url: `/tenantsConectaSMSToken/${data.id}`,
    method: 'put',
    data
  })
}

export function AlterarTenantLivsonSMSToken (data) {
  return request({
    url: `/tenantsLivsonSMSToken/${data.id}`,
    method: 'put',
    data
  })
}

export function AlterarTenantHubToken (data) {
  return request({
    url: `/tenantsHubToken/${data.id}`,
    method: 'put',
    data
  })
}

export function AlterarTenantWuzapiHost (data) {
  return request({
    url: `/tenantsWuzapiHost/${data.id}`,
    method: 'put',
    data
  })
}

export function AlterarTenantEvolutionHost (data) {
  return request({
    url: `/tenantsEvolutionHost/${data.id}`,
    method: 'put',
    data
  })
}

export function AlterarTenantNaoOficial (data) {
  return request({
    url: `/tenantsHideUnoficial/${data.id}`,
    method: 'put',
    data
  })
}

export function LiberarUpdate (data) {
  return request({
    url: `/tenantsIsUpdating/${data.id}`,
    method: 'put',
    data
  })
}

export function AceitarTermos (data) {
  return request({
    url: `/tenantsAcceptTerms/${data.id}`,
    method: 'put',
    data
  })
}

export function AlterarTenantFixarConexoes (data) {
  return request({
    url: `/tenantsFixConnections/${data.id}`,
    method: 'put',
    data
  })
}

export function AlterarTenantForcarPendente (data) {
  return request({
    url: `/tenantsForcePending/${data.id}`,
    method: 'put',
    data
  })
}

export function AlterarTenantSemRedis (data) {
  return request({
    url: `/tenantsNoRedis/${data.id}`,
    method: 'put',
    data
  })
}

export function AlterarTenantSupervisorAdmin (data) {
  return request({
    url: `/tenantsSupervisorAdmin/${data.id}`,
    method: 'put',
    data
  })
}

export function AlterarTenantAgruparTicket (data) {
  return request({
    url: `/tenantsGroupTickets/${data.id}`,
    method: 'put',
    data
  })
}

export function AlterarTenantAtualizarNomes (data) {
  return request({
    url: `/tenantsUpdateNames/${data.id}`,
    method: 'put',
    data
  })
}

export function AlterarTenantWebsocketToken (data) {
  return request({
    url: `/tenantsWebsocketToken/${data.id}`,
    method: 'put',
    data
  })
}

export function AlterarTenantGroqCloud (data) {
  return request({
    url: `/tenantsGroqCloud/${data.id}`,
    method: 'put',
    data
  })
}

export function AlterarTenantForcarAdmin (data) {
  return request({
    url: `/tenantsForceAdmin/${data.id}`,
    method: 'put',
    data
  })
}

export function AlterarTenantDomain (data) {
  return request({
    url: `/tenantsDomain`,
    method: 'post',
    data
  })
}

export function AlterarTenantRefreshLicenseData (data) {
  return request({
    url: `/tenantsRefreshLicenseData`,
    method: 'post',
    data
  })
}

export function AlterarTenantTentativas (data) {
  return request({
    url: `/tenantsMaxRetries/${data.id}`,
    method: 'put',
    data
  })
}

export function AlterarTenantLimiteMensagensChatInterno (data) {
  return request({
    url: `/tenantsPrivateMessageLimit/${data.id}`,
    method: 'put',
    data
  })
}

export function AlterarTenantLimiteTickets (data) {
  return request({
    url: `/tenantsTicketLimit/${data.id}`,
    method: 'put',
    data
  })
}

export function DeletarTenant (data) {
  return request({
    url: `/tenants/${data.id}`,
    method: 'delete'
  })
}

export function ListarQueue() {
  return request({
    url: `/bullqueues`,
    method: 'get'
  })
}

export function ListarTenantsLs(email) {
  return request({
    url: `/tenantsLs?tenantEmail=${email}`,
    method: 'get'
  });
}

export function ListarMetricasTenant(tenantId) {
  return request({
    url: `/tenantsMetrics`,
    method: 'post',
    data: { tenantId }
  });
}

export function ReiniciarQueue() {
  return request({
    url: '/bullqueues/restart-process',
    method: 'post'
  })
}

export function ReprocessarServico(queueName) {
  return request({
    url: `/bullqueues/${queueName}/reprocess`,
    method: 'post'
  })
}

export function ScanContacts(tenantId) {
  return request({
    url: '/scanContacts',
    method: 'post',
    data: { tenantId }
  });
}
