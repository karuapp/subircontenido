export default {
  pushNotification: {
    activeSubscriptionWebPush: "启用推送通知",
    updateSubscriptionWebPush: "更新推送通知"
  },
  buscarMensagemModal: {
    title: "搜索消息（测试版）",
    searchPlaceholder: "输入要搜索的词条",
    searchButton: "搜索",
    loadingMessages: "正在搜索消息...",
    loadingMoreMessages: "正在加载更多消息...",
    atendimento: "服务： ＃",
    messageDate: "留言日期： ",
    channel: "渠道： ",
    status: "地位： ",
    group: "团体： ",
    lastMessage: "最后一条消息： ",
    unknown: "未知",
    noMessages: "没有消息",
    closeButton: "关闭",
    statusMap: {
      closed: "关闭",
      open: "打开",
      pending: "待办的",
      schedule: "已安排"
    },
    isGroup: {
      yes: "是的",
      no: "不"
    }
  },
  generalAgendamento: {
    appointments: "预约",
    addAppointment: "添加时间表",
    attention: "注意力！！您确实要删除此消息吗？",
    oldMessages: "客户端中的旧消息不会被删除。",
    yes: "是的",
    no: "不",
    message: "信息",
    contact: "接触",
    actions: "行动",
    status: "地位",
    type: "类型",
    date: "日期",
    created: "创建",
    dateFormat: "日/月/年 HH:mm:ss"
  },
  status: {
    open: "打开",
    closed: "关闭",
    pending: "待办的",
    schedule: "已安排",
    undefined: "不定"
  },
  type: {
    chat: "文本",
    image: "图像",
    templates: "模板",
    video: "视频",
    application: "文件",
    text: "文件"
  },
  dialog: {
    title: "消息调度",
    close: "关闭",
    selectWhatsapp: "选择 WhatsApp",
    selectContact: "选择联系人",
    loadingContacts: "请稍候... 联系人正在加载！",
    searchTip: "按姓名或电话号码搜索！"
  },
  inputMensagemAgendamento: {
    added: "额外",
    templateError: "未选择模板。",
    scheduleError: "要安排消息，请输入安排日期/时间字段。",
    templateScheduledSuccess: "模板已成功安排！",
    templateSendError: "发送模板时出错。",
    recurrenceCountLabel: "重复（创建消息的模式：1）",
    recurrenceLabel: "复发",
    noRepeat: "请勿重复",
    every5Days: "每 5 天",
    every10Days: "每 10 天",
    every15Days: "每 15 天",
    every20Days: "每 20 天",
    every25Days: "每 25 天",
    every30Days: "每 30 天",
    every35Days: "每 35 天",
    every40Days: "每 40 天",
    every45Days: "每 45 天",
    every60Days: "每 60 天",
    messageScheduled: "消息安排成功！",
    placeholder: "输入您的消息",
    scheduleFile: "计划文件",
    scheduleMessage: "安排消息",
    scheduleSticker: "时间表贴纸",
    scheduleImageTo: "安排图像",
    scheduleVideo: "安排视频会议链接",
    templates: "模板",
    activateSignature: "激活订阅",
    deactivateSignature: "取消订阅",
    confirmSend: "确认发送：输入",
    cancelSend: "取消：ESC",
    scheduleDateLabel: "预约日期/时间",
    customSchedule: "自定义调度",
    thirthyMinutes: "30分钟内",
    isTomorrow: "明天",
    nextWeek: "下周",
    selectTemplate: "选择模板",
    schedule: "安排",
    cancel: "取消",
    selectWhatsapp: "选择 WhatsApp",
    selectContact: "选择联系人",
    emoji: "表情符号",
    find: "定位...",
    invalidFile: "无效文件",
    acceptFormats: "接受的格式",
    error: "发生错误",
    fileNotFound: "没有要上传的文件",
    messageNotFound: "没有要发送的消息",
    checkFiles: "检查所选文件的大小和扩展名"
  },
  mixinCommonAgendamento: {
    note: "注意",
    buttonNotAvailable: "此按钮仅在移动设备上可点击",
    dateFormat: "日/月/年"
  },
  aniversarios: {
    title: "生日",
    sendManualMessage: "手动发送生日消息",
    modalTitle: "选择 WhatsApp",
    modalDescription: "手动发送生日消息",
    modalWarning: "点击发送后，频道中注册的生日信息将会发送给当天过生日的人。",
    sendingMessages: "请稍候，正在发送生日消息...",
    sendingMessagesSuccess: "生日消息发送成功！",
    sendingMessagesError: "发送生日消息时出错。",
    cancel: "取消",
    send: "发送",
    whatsappLabel: "WhatsApp",
    columns: {
      id: "#",
      name: "姓名",
      birthdayDate: "生日",
      actions: "行动"
    }
  },
  api: {
    title: "API 设置",
    addButton: "添加",
    postmanButton: "邮差",
    copyToken: "复制令牌",
    editConfig: "编辑配置",
    newToken: "生成新令牌",
    deleteConfig: "删除配置",
    url: "网址",
    bearerToken: "持有者令牌",
    key: "钥匙",
    actions: "行动",
    dialogDeleteTitle: "注意力！！",
    dialogDeleteMessage: "您确实要删除吗？",
    dialogNewTokenMessage: "您确实要为",
    deleteSuccess: "刪除！",
    deleteError: "无法删除。",
    tokenUpdated: "令牌已更新！",
    tokenUpdateError: "无法刷新令牌。",
    tokenCopied: "令牌已复制！",
    dialogCancel: "不",
    dialogConfirm: "是的",
    columns: {
      name: "姓名",
      token: "代币",
      isActive: "积极的",
      actions: "行动"
    }
  },
  modalApi: {
    titleCreate: "创建 API 配置",
    titleEdit: "编辑 API 配置",
    fieldsetApiData: "API数据",
    apiNameLabel: "API 名称",
    apiSessionLabel: "发送方式",
    apiSessionError: "强制的",
    apiAuthTokenLabel: "身份验证令牌",
    apiAuthTokenHint: "它将作为授权在标题中发送。如果有前缀，则必须在此处输入。例如：持有者、令牌",
    apiAuthTokenError: "身份验证令牌是必需的",
    fieldsetWebhook: "WebHook",
    activeLabel: "积极的",
    cancelButton: "取消",
    saveButton: "节省",
    wabaBannerTitle: "官方API（WABA）",
    wabaBannerDescription1: "可用端点：SetQueue、SetTicketInfo、SetTag、ShowTicketInformation、ShowChannelInformation、ShowTicketInformationChatBot、ShowAllTicketInformation",
    wabaBannerDescription2: "测试版：SendMessageParams、SendMessageAPIFile、SendMessageAPIFileURL、SendMessageAPIText 和 SendMessageAPITextBase64",
    wabaBannerDescription3: "要发送消息和其他组件，请使用官方的 Meta 集合： ",
    wabaBannerLink: "关联",
    validationError: "检查必填字段和不一致之处。",
    apiCreatedSuccess: "API 创建成功。",
    apiEditedSuccess: "API 编辑成功。",
    apiError: "發生錯誤！"
  },
  assinatura: {
    lookForUpdatedData: "正在查找更新的许可证数据...",
    updateInfo: "更新信息",
    licenseRefreshError: "更新许可证时出错",
    domainModalTitle: '域名',
    domainModalSubtitle: '添加您想要允许的域名',
    domainFieldLabel: '域名（用逗号分隔）',
    domains: "域名： ",
    backendVersion: "后端版本： ",
    frontendVersion: "前端版本： ",
    expireIn: "此版本将在以下时间到期： ",
    remainingDays: "下次强制更新时间： ",
    expiredVersion: "已过期版本！",
    days: "天",
    blockOn: "已阻止",
    blockOff: "发布",
    license_code: "许可证代码： ",
    license_expiry: "许可证到期： ",
    is_blocked: "已阻止： ",
    pageTitle: "许可证管理",
    pageSubtitle: "控制和调整许可证信息。",
    license: "执照： ",
    licenseStatusLabel: "许可证状态： ",
    licenseActive: "积极的",
    licenseValidating: "正在验证...",
    forceReleaseUpdateButton: "强制释放刷新按钮",
    emailLabel: "电子邮件：",
    updateLicenseButton: "更改许可证",
    modalTitle: "更改密钥",
    modalSubtitle: "更新许可证密钥",
    emailFieldLabel: "新密钥",
    emailFieldError: "密钥是必需的",
    cancelButton: "取消",
    saveButton: "节省",
    successMessage: "许可证密钥更新成功！",
    errorLimitExceeded: "进行了多次激活尝试。 1 分钟后重试",
    errorUpdate: "更新电子邮件时出错。"
  },
  modalPlano: {
    titleCreate: "创建计划",
    titleEdit: "编辑计划",
    valueLabel: "计划价值",
    connectionsLabel: "連接",
    usersLabel: "用户",
    cancelButton: "取消",
    saveButton: "节省",
    successCreate: "计划创建成功！",
    successEdit: "方案修改成功！",
    error: "發生錯誤！"
  },
  atualizar: {
    migrationTitle: "文件迁移",
    migrationBanner: "注意：这是一个不可逆的过程，会将公共文件夹中的文件复制到公司子文件夹中。在开始文件迁移过程之前，必须拍摄 VPS 的快照并确保您可以通过 VPS 上的 SSH 访问根用户，以便进行可能的干预。该过程可能需要几个小时，具体取决于您的 VPS 的性能和文件数量。",
    migrationButton: "开始迁移",
    cleanTitle: "公共文件夹清理",
    cleanBanner: "警告：这是一个不可逆的过程，将删除公共文件夹中的所有文件。在开始文件清理过程之前，必须拍摄 VPS 的快照并确保您可以通过 VPS 上的 SSH 访问 root 用户，以便进行可能的干预。该过程可能需要几个小时，具体取决于您的 VPS 的性能和文件数量。",
    cleanButton: "开始清洁",
    updateTitle: "自动更新",
    updateButton: "开始更新",
    updateBanner: "仅在拍摄 VPS 快照后才执行此过程。此过程必须由租户 1 的超级管理员执行。我确认我已经对服务器进行了备份（快照）并可以访问终端。如果VPS不稳定，更新可能会失败，需要通过终端进行自动更新。",
    buttonWarning: "此过程必须由租户 1 的超级管理员执行。我确认我已经对服务器进行了备份（快照）并可以访问终端。您确定要开始更新过程吗？",
    uploadSuccess: "文件上传成功。",
    uploadError: "加载文件时出错。",
    updateStartSuccess: "更新过程已成功开始。",
    updateStartError: "无法启动更新过程。",
    migrationStartSuccess: "迁移过程已成功启动。",
    migrationStartError: "无法启动迁移过程。",
    cleanStartSuccess: "清理过程已成功开始。",
    cleanStartError: "无法启动清理过程。",
    fileValidationError: "只允许 update_rapido.zip 文件。"
  },
  configurarAvaliacao: {
    tooltipMessage: "添加评论消息时，您可以自定义每个评论的回复消息。否则，系统将以定义的默认消息响应：您的评论已成功存储。",
    messagePlaceholder: "输入评论信息",
    title: "评论",
    tooltipTitle: "评估类型：",
    tooltipEvaluation: "评估：分配从 0 到 5 的值。",
    tooltipLabel: "标签：每次评论都发送消息。",
    saveButton: "节省",
    editablePlaceholder: "点击编辑标签",
    successMessage: "更新了评估。",
    errorMessage: "更新评论时出错。",
    ratingStore: "评价留言已成功保存",
    ratingStoreError: "存储评估时出现错误消息",
    ratingStoreAttempt: "成功存储评估尝试消息",
    labels: {
      ruim: "坏的",
      regular: "常规的",
      bom: "好的",
      muitoBom: "非常好",
      excelente: "出色的",
      incrivel: "极好的"
    }
  },
  listarAvaliacao: {
    empty: "空的",
    contactName: "联系人姓名",
    title: "评论",
    addButton: "添加",
    searchPlaceholder: "定位",
    dateFilterPlaceholder: "按日期过滤",
    evaluationColumn: "评估",
    userColumn: "用户",
    ticketColumn: "服务",
    dateColumn: "日期",
    actionsColumn: "行动",
    deleteConfirmationTitle: "注意力！！",
    deleteConfirmationMessage: "您确实要删除该评论吗？",
    deleteSuccess: "评论删除成功",
    deleteError: "删除评论时出错。",
    loadError: "加载评论时出错。",
    dialogCancel: "不",
    dialogConfirm: "是的"
  },
  modalAvaliacao: {
    editTitle: "编辑评分",
    createTitle: "创建评估",
    evaluationLabel: "评估",
    attemptsLabel: "尝试",
    ticketLabel: "服务",
    updateSuccess: "评论编辑成功！",
    createSuccess: "评论创建成功！",
    errorMessage: "保存评估时出错。"
  },
  contatosCampanha: {
    campaign: "活动",
    start: "开始",
    end: "结尾",
    status: "地位",
    states: "州",
    labels: "标签",
    wallet: "文件夹",
    backToCampaigns: "列出广告系列",
    contactsTitle: "联系方式",
    contacts: "联系方式",
    refreshTooltip: "更新列表",
    clearCampaign: "清除活动",
    addContacts: "包括联系人",
    filters: "过滤器（联系人创建日期）",
    selectContactsTitle: "选择联系人",
    errorFetchingContacts: "获取联系人时出错。",
    errorAddingContacts: "添加联系人时出错。",
    contactDeleted: "联系人被排除在本次活动之外。",
    contactsAdded: "已添加联系人。",
    campaignCleared: "清洁运动取得成功。",
    confirmClearCampaign: "您确实要清除竞选联系人吗？",
    errorClearingCampaign: "清除活动时出错。",
    errorDelete: "无法删除活动联系人",
    filterNamePhone: "过滤姓名或电话",
    newContact: "生成",
    errorUsers: "加载用户时出现问题"
  },
  campanhas: {
    register: "每页记录数：",
    campanhas: "活动",
    title: "活动",
    warningBanner: "适用于 Baileys 和 Whatsapp-Web.JS 的活动",
    addCampaign: "添加广告系列",
    columns: {
      id: "ID",
      name: "活动",
      start: "开始",
      status: "地位",
      contactsCount: "数量联系方式",
      queueForSend: "提交队列",
      notSended: "未发送",
      sent: "发送",
      actions: "行动"
    },
    status: {
      pending: "待办的",
      scheduled: "已安排",
      processing: "加工",
      canceled: "取消",
      finished: "完全的"
    },
    actions: {
      forceFinish: "强制结束",
      downloadReportCsv: "下载 CSV 报告",
      downloadReportPdf: "下载 PDF 报告",
      refresh: "更新列表",
      sortById: "按 ID 排序",
      addCampaign: "添加广告系列",
      programSend: "安排发货",
      cancelCampaign: "取消活动",
      duplicateCampaign: "重复营销活动",
      downloadReport: "下载报告",
      deleteCampaign: "删除广告系列",
      editCampaign: "编辑活动",
      viewContacts: "查看联系人"
    },
    dialogs: {
      forceFinish: {
        title: "强制结束",
        message: "您确实要强制结束该活动吗？"
      },
      cancelCampaign: {
        title: "取消广告活动",
        message: "您确实要取消该活动吗？"
      },
      cancelCampaignError: {
        message: "无法取消正在进行的活动"
      },
      deleteCampaign: {
        title: "删除广告系列",
        message: "您确实要删除该活动吗？"
      },
      duplicateCampaign: {
        title: "重复营销活动",
        message: "您确实要复制该活动吗？",
        no: "不",
        yes: "是的"
      },
      startCampaign: {
        title: "开始活动",
        message: "您确实想要发起该活动吗？"
      }
    },
    notifications: {
      campaignForceFinished: "活动强制结束成功。",
      campaignStarted: "活动开始了。",
      campaignCanceled: "活动取消。",
      campaignDuplicated: "活动已成功复制。",
      campaignDeleted: "广告活动已删除",
      reportGenerated: "报告生成成功。",
      errorGeneratingReport: "生成报告时出错。",
      errorDuplicate: "复制活动时出错。",
      warningEdit: "您只能编辑待处理或已取消的活动。",
      errorCancel: "无法取消活动",
      errorStart: "无法安排早于当前日期的活动",
      errorStartContact: "需要有关联的联系人来安排活动",
      errorStartCancel: "您只能安排待定或已取消的活动。",
      errorGeneral: "无法启动广告活动"
    },
    warningModal: {
      title: "活动通知",
      description: {
        whatsappRisk1: {
          title: "WhatsApp 可以阻止或禁止我的号码吗？",
          content: "是的，这种可能性确实存在，应该认真对待！ WhatsApp 有严格的规则，严格监控群发消息的发送。"
        },
        whatsappRisk2: {
          title: "WhatsApp 对垃圾邮件零容忍！",
          content: "它有严格的规则并密切监控群发信息。"
        },
        highSpamRisk: {
          title: "注意力",
          content: "如果有 2% 的收件人举报您的号码或将您的消息标记为垃圾邮件，您的号码将被阻止/禁止！"
        }
      }
    },
    baixarRelatorio: {
      title: "活动报告",
      description: {
        generatedAt: "生成日期： ",
        page: "页： ",
        campaignDetails: {
          id: "ID： {id}",
          status: "状态：{status}",
          startDate: "开始日期：{date}",
          totalContacts: "联系人总数：{total}",
          delivered: "镜头：{count}",
          pending: "待处理：{count}",
          failed: "失败：{count} 次"
        },
        tableHeaders: {
          index: "#",
          name: "姓名",
          status: "地位",
          message: "信息",
          media: "媒体"
        },
        statusDescriptions: {
          delivered: "发表",
          pending: "待办的",
          failed: "失败"
        },
        placeholders: {
          unknownName: "未知",
          noMessage: "没有消息",
          noMedia: "无媒体"
        },
        notifications: {
          success: "报告生成成功！",
          error: "生成 PDF 报告时出错。"
        },
        fileName: "活动报告.pdf"
      }
    }
  },
  modalCampanha: {
    title: {
      create: "创建广告系列",
      edit: "编辑活动"
    },
    labels: {
      campaignName: "广告系列名称",
      startDate: "开始日期/时间",
      session: "发送方式",
      delay: "延迟",
      media: "媒体合成消息",
      message: "输入消息",
      messagePreview: "预览",
      firstMessage: "第一条消息",
      secondMessage: "第二条消息",
      thirdMessage: "第三条消息",
      variables: "变量",
      emoji: "表情符号",
      seconds: "秒"
    },
    placeholders: {
      message: "输入消息"
    },
    validations: {
      required: "强制的",
      invalidDate: "不能早于当天"
    },
    buttons: {
      cancel: "取消",
      save: "节省"
    },
    notifications: {
      successEdit: "活动已编辑！",
      successCreate: "活動創建！",
      error: "创建活动时遇到问题吗？",
      validationError: "检查所有必填字段是否均已填写。",
      errorImage: "加载图像有问题吗？"
    },
    emojiPicker: {
      search: "定位...",
      lang: "pt-BR"
    },
    optRadio: {
      msg1: "消息1",
      msg2: "消息2",
      msg3: "消息3"
    }
  },
  listChatflow: {
    title: "流程",
    addButton: "添加",
    status: {
      active: "积极的",
      inactive: "不活跃"
    },
    actions: {
      edit: "编辑信息",
      duplicate: "重复流",
      open: "打开流",
      importJson: "导入 Json",
      delete: "删除"
    },
    confirmDelete: {
      title: "您确定要删除此流吗？",
      message: "{姓名}"
    },
    importJsonDialog: {
      title: "将 JSON 导入 {name}",
      jsonLabel: "粘贴 JSON",
      jsonValidationError: "需要 JSON",
      importButton: "进口",
      cancelButton: "取消",
      importSuccess: "JSON 导入成功！",
      importError: "格式无效。检查 JSON。"
    }
  },
  modalChatflow: {
    title: {
      create: "创建流程",
      edit: "编辑流程",
      duplicate: "重复流",
      duplicateSuffix: "（姓名：{name}）"
    },
    fields: {
      description: "描述",
      isActive: "积极的",
      testNumber: "测试编号",
      testNumberHint: "保持清洁以使自动回复正常工作。否则，它只适用于此处提供的数字。"
    },
    actions: {
      save: "节省",
      cancel: "取消"
    },
    notifications: {
      created: "已创建新流程。",
      edited: "已編輯流。",
      duplicated: "重复流。"
    }
  },
  chatPrivado: {
    labels: {
      grupo: "团体"
    },
    toolbar: {
      returnMenu: "返回菜单",
      atendimento: "服务",
      minimize: "减少",
      groupMembers: "小组成员"
    },
    dialog: {
      groupMembers: "小组成员"
    },
    chatHeader: {
      online: "在线的",
      offline: "离线",
      noName: "无名",
      noEmail: "没有电子邮件"
    },
    chatFooter: {
      emoji: "表情符号",
      attachFile: "附加文件",
      sendVideoLink: "发送视频会议链接",
      placeholder: "输入您的消息",
      send: "发送"
    },
    tabs: {
      users: "用户",
      groups: "团队"
    },
    messages: {
      dateSeparator: "今天",
      downloadTooltip: "下载：{fileName}",
      read: "交易",
      unread: "未读",
      today: "今天",
      senderMe: "我",
      download: "下去",
      pdfPlaceholder: "下载 PDF",
      online: "在线的",
      offline: "离线",
      searchPlaceholder: "寻找...",
      usersTab: "用户",
      groupsTab: "团队",
      noMessages: "未找到任何消息。"
    },
    notifications: {
      errorLoadMessages: "加载消息时出错。",
      fileRejected: "错误：检查上传的文件。",
      sendMessageError: "发送消息时出错。",
      successMessageSent: "消息发送成功。"
    }
  },
  configuracoesSessoes: {
    baileys: {
      title: "重置 Baileys 连接（清除会话并重启）",
      description: "您确定要重置 Baileys 连接吗？此操作将清除所有会话并重新连接。",
      message: "Baileys 连接已成功重置",
      error: "重置 Baileys 连接时出错"
    },    
    labels: {
      updateSessions: "更新的会话",
      noEvents: "未找到任何事件",
      eventCount: "事件数量",
      name: "姓名",
      status: "地位",
      session: "会议",
      number: "数字",
      updatedAt: "最后更新",
      isDefault: "标准",
      actions: "行动",
      defaultConnection: "标准连接",
      deleteConnection: "删除连接",
      setDefault: "设为默认值",
      confirmDeleteTitle: "注意力！！您确实要删除吗？",
      confirmDeleteMessage: "此频道中打开的聊天将被关闭，但可以在支持面板中看到。",
      cancel: "不",
      confirm: "是的"
    },
    messages: {
      reloadPage: "刷新页面",
      errorLoadingColors: "加载颜色时出错。",
      noColorsStored: "localStorage 中没有存储颜色。"
    }
  },
  configuracoesSessoesStatus: {
    statuses: {
      qrcode: {
        title: "等待读取二维码",
        description: "点击“QR CODE”按钮，用手机扫描二维码即可开始会话"
      },
      disconnected: {
        title: "无法启动该通道的通信。",
        whatsapp: "确保您的手机已连接到互联网并重试，或请求新的二维码。",
        waba: "尝试再次连接。如果错误仍然存在，请确认令牌是否正确。",
        telegram: "尝试再次连接。如果错误仍然存在，请确认令牌是否正确。",
        instagram: "尝试再次连接。如果错误仍然存在，请确认凭据是否正确。"
      },
      connected: {
        meow: "连接已建立： ",
        waba: "连接已建立： ",
        whatsapp: "连接已建立： ",
        loading: "正在加载数据..."
      },
      pairingTimeout: {
        title: "蜂窝连接丢失",
        description: "确保您的手机已连接到互联网并且 WhatsApp 已打开，或者单击“断开连接”按钮以获取新的二维码。"
      },
      opening: {
        title: "正在建立连接。",
        description: "这可能需要一段时间..."
      }
    },
    labels: {
      lastUpdate: "最后更新"
    }
  },
  configuracoesChatgpt: {
    labels: {
      enableChatgpt: "启用 ChatGPT 集成",
      enableChatgptDescription: "启用后，系统将使用来自 ChatGPT 的信息。",
      enableChatgptAll: "默认为所有服务启用 ChatGPT 集成",
      enableChatgptAllDescription: "激活后，系统将在所有通话中使用来自 ChatGPT 的信息。"
    },
    notifications: {
      success: "配置已更改！",
      error: "更改配置时发生错误。"
    }
  },
  configuracoesLm: {
    labels: {
      enableLm: "启用与 LM Studio 的集成",
      enableLmDescription: "当激活时，系统将使用来自 LM Studio 的信息。",
      enableLmAll: "默认启用所有服务与 LM Studio 的集成",
      enableLmAllDescription: "当激活时，系统将在所有服务中使用来自 LM Studio 的信息。"
    },
    notifications: {
      success: "配置已更改！",
      error: "更改配置时发生错误。"
    }
  },
  configuracoesOllama: {
    labels: {
      enableOllama: "启用 Ollama 集成",
      enableOllamaDescription: "当激活时，系统将消耗来自 Ollama 的信息。",
      enableOllamaAll: "默认为所有服务启用 Ollama 集成",
      enableOllamaAllDescription: "激活后，系统将在所有通话中使用来自 Ollama 的信息。"
    },
    notifications: {
      success: "配置已更改！",
      error: "更改配置时发生错误。"
    }
  },
  configuracoesDialogflow: {
    labels: {
      enableDialogflow: "启用 Dialogflow",
      enableDialogflowDescription: "启用后，系统将使用 Dialogflow 流。",
      enableDialogflowAll: "默认为所有支持启用 Dialogflow 集成",
      enableDialogflowAllDescription: "激活后，系统将在所有通话中使用来自 Dialogflow 的信息。"
    },
    notifications: {
      success: "配置修改成功！",
      error: "更改配置时出错。"
    }
  },
  configuracoesDify: {
    labels: {
      enableDify: "启用与 Dify 的集成",
      enableDifyDescription: "当激活时，系统将消耗来自 Dify 的信息。",
      enableDifyAll: "默认为所有服务启用 Dify 集成",
      enableDifyAllDescription: "当激活时，系统将在所有通话中使用来自 Dify 的信息。"
    },
    notifications: {
      success: "配置修改成功！",
      error: "更改配置时出错。"
    }
  },
  configuracoesGemini: {
    labels: {
      enableGemini: "启用 Gemini 集成",
      enableGeminiDescription: "当激活时，系统将消耗来自 Gemini 的信息。",
      enableGeminiAll: "默认为所有服务启用 Gemini 集成",
      enableGeminiAllDescription: "激活后，系统将在所有通话中消耗来自 Gemini 的信息。"
    },
    notifications: {
      success: "配置修改成功！",
      error: "更改配置时出错。"
    }
  },
  configuracoesDeepseek: {
    labels: {
      enableDeepseek: "启用 Deepseek 集成",
      enableDeepseekDescription: "当激活时，系统将消耗来自 Deepseek 的信息。",
      enableDeepseekAll: "默认为所有服务启用 Deepseek 集成",
      enableDeepseekAllDescription: "当激活时，系统将在所有调用中使用来自 Deepseek 的信息。"
    },
    notifications: {
      success: "配置修改成功！",
      error: "更改配置时出错。"
    }
  },
  configuracoesQwen: {
    labels: {
      enableQwen: "启用 Qwen 集成",
      enableQwenDescription: "当激活时，系统将消耗来自 Qwen 的信息。",
      enableQwenAll: "默认为所有服务启用 Qwen 集成",
      enableQwenAllDescription: "当激活时，系统将在所有通话中使用来自 Qwen 的信息。"
    },
    notifications: {
      success: "配置修改成功！",
      error: "更改配置时出错。"
    }
  },
  configuracoesClaude: {
    labels: {
      enableClaude: "启用 Claude 集成",
      enableClaudeDescription: "当激活时，系统将消耗来自克劳德的信息。",
      enableClaudeAll: "默认为所有服务启用 Claude 集成",
      enableClaudeAllDescription: "当激活时，系统将在所有通话中消耗来自 Claude 的信息。"
    },
    notifications: {
      success: "配置修改成功！",
      error: "更改配置时出错。"
    }
  },
  configuracoesGrok: {
    labels: {
      enableGrok: "启用 Grok 集成",
      enableGrokDescription: "当激活时，系统将消耗来自 Grok 的信息。",
      enableGrokAll: "默认为所有服务启用 Grok 集成",
      enableGrokAllDescription: "当激活时，系统将在所有呼叫中使用来自 Grok 的信息。"
    },
    notifications: {
      success: "配置修改成功！",
      error: "更改配置时出错。"
    }
  },
  configuracoesEvolution: {
    labels: {
      warningEvo: "Evolution v.2.20.0 或更高版本",
      installApi: "免费安装您的 Evolution API",
      apiIntegrationUrl: "https://github.com/EvolutionAPI/evolution-api",
      checkApiStatus: "在新选项卡中检查 API 状态",
      apiUrl: "API 网址 (https://subevo.com.br)",
      globalKey: "全局密钥"
    },
    notifications: {
      success: "配置修改成功！",
      error: "更改配置时出错。请检查数据并重试。",
      loadError: "加载设置时出错。请重试。",
      invalidUrl: "请输入有效的 URL 后再继续！"
    }
  },
  configuracoesgroqCloud: {
    labels: {
      installApi: "免费注册您的 GroqCloud API",
      apiIntegrationUrl: "https://console.groq.com/",
      apiKey: "API 密钥",
      language: "语言",
      model: "模型",
      enableGroqCloud: "启用与 GroqCloud 的集成",
      enableGroqCloudDescription: "当激活时，系统将使用来自 Groq Cloud 的信息并转录接收到的音频。"
    },
    notifications: {
      success: "配置修改成功！",
      error: "更改配置时出错。请检查数据并重试。",
      loadError: "加载设置时出错。请重试。",
      invalidUrl: "请输入有效的 URL 后再继续！"
    }
  },
  configuracaoLanes: {
    title: "车道",
    addLane: "添加车道",
    editLane: "编辑巷",
    deleteLane: "删除车道",
    deleteConfirmation: "您确定要删除车道“{lane}”吗？",
    laneDeleted: "车道“{lane}”删除成功！",
    columns: {
      id: "#",
      name: "车道",
      position: "位置",
      actions: "行动"
    },
    notifications: {
      successDelete: "里删除成功！",
      errorDelete: "删除 Lane 时出错。"
    }
  },
  hub: {
    createAccountInstruction: "在 hub.notificame.com.br 创建一个帐户并生成您的令牌",
    tooltip: "HUB 通知我（测试版）",
    tokenLabel: "你的令牌通知我"
  },
  configuracaoMeta: {
    title: "元设置",
    webhookMeta: "元 Webhook",
    webhookTooltip: "元 Webhook",
    metaTokenLabel: "Meta Webhook 令牌",
    testBMTitle: "测试BM",
    testBMDescription: "输入以下详细信息以检查您的 BMS 状态",
    testBMTooltip: "测试BM",
    wabaIdLabel: "WABA ID（Whatsapp 商业账户 ID）",
    wabaVersionLabel: "WABA 版本 (Whatsapp 商业 API 版本)",
    wabaTokenLabel: "WABA 代币（元业务经理代币）",
    verifyBMButton: "检查BM",
    verificationResultTitle: "验证结果",
    verification: {
      verifiedName: "姓名已验证",
      verificationStatus: "验证状态",
      phoneNumber: "电话号码",
      qualityRating: "质量评级",
      platformType: "平台类型",
      throughputLevel: "吞吐量级别",
      webhookConfigured: "Webhook 配置",
      id: "ID"
    },
    notConfigured: "未配置",
    notifications: {
      successVerify: "验证完成！",
      errorVerify: "验证 BM 时出错！",
      successCopy: "链接已复制！",
      successUpdate: "令牌更新成功！",
      errorUpdate: "刷新令牌时出错！"
    }
  },
  configuracaoMotivo: {
    title: "需求",
    addMotivo: "添加需求",
    editMotivo: "编辑需求",
    deleteMotivo: "删除需求",
    deleteConfirmation: "您确实要删除需求“{reason}”吗？",
    motivoDeleted: "需求“{reason}”已成功删除！",
    columns: {
      id: "#",
      name: "要求",
      actions: "行动"
    },
    notifications: {
      successDelete: "需求删除成功！",
      errorDelete: "删除需求时出错。"
    }
  },
  configuracoesN8N: {
    title: "N8N 集成设置",
    enableIntegration: "启用与 N8N 的集成",
    enableIntegrationCaption: "当激活时，系统将消耗来自 N8N 的信息。",
    enableIntegrationAllTickets: "默认为所有服务启用 N8N 集成",
    enableIntegrationAllTicketsCaption: "激活后，系统将在所有通话中使用来自 N8N 的信息。",
    toggleEnabled: "已启用",
    toggleDisabled: "已禁用",
    notifications: {
      success: "配置更新成功！",
      error: "更新配置时出错。"
    }
  },
  configuracaoPagamento: {
    title: "付款信息",
    paymentLink: "付款链接",
    paymentId: "付款 ID",
    status: "地位",
    dueDate: "到期",
    pending: "待办的",
    overdue: "逾期",
    toolbarTitle: "付款信息",
    notifications: {
      errorFetch: "无法列出付款选项。"
    }
  },
  configuracoesSMS: {
    title: "短信设置",
    comteleAccount: "在 comtele.com.br 创建帐户并生成 API 密钥",
    conectaAccount: "在 Conecta 上创建帐户并生成 API 密钥",
    comteleTokenLabel: "您的 Comtele API 密钥",
    conectaTokenLabel: "您的 API 密钥连接",
    comteleTooltip: "短信通信",
    conectaTooltip: "短信连接",
    livsonAccount: "在 BHI 上创建帐户并生成 API 密钥",
    livsonTokenLabel: "您的 BHI API 密钥",
    livsonTooltip: "短信 BHI",
    notifications: {
      successUpdate: "令牌更新成功！",
      errorUpdate: "刷新令牌时出错。"
    }
  },
  configuracoesSMTP: {
    erroEnvioTeste: "发送测试时出错。",
    assuntoTeste: "电子邮件测试",
    mensagemTeste: "这是系统发送的测试电子邮件。",
    enviarTeste: "提交测试",
    testeEnviado: "测试发送成功！",
    testeErro: "发送测试时出错。",
    testeEmail: "测试电子邮件",
    testeAssunto: "测试对象",
    testeMensagem: "测试消息",
    testeBotao: "点击此处测试",
    emailDestino: "目标电子邮件",
    title: "SMTP 设置",
    enableSMTP: "启用 SMTP",
    enableSMTPCaption: "激活后，系统将发送信息到用户的邮箱。",
    emailHostLabel: "电子邮件服务器（主机）：",
    emailPortLabel: "SMTP 端口",
    emailUserLabel: "电子邮件用户：",
    emailPassLabel: "电子邮件密码：",
    emailSecure: "安全协议",
    emailSecureCaption: "启用安全协议。",
    notifications: {
      successUpdate: "配置更新成功！",
      errorUpdate: "更新配置时出错。"
    }
  },
  configuracoesTypebot: {
    title: "Typebot 设置",
    enableTypebot: "启用 Typebot",
    enableTypebotCaption: "当激活时，系统将消耗 Typebot 流。",
    enableAllTickets: "默认为所有服务启用 Typebot 集成",
    enableAllTicketsCaption: "当激活时，系统将在所有呼叫中使用来自 Typebot 的信息。",
    notifications: {
      successUpdate: "配置更新成功！",
      errorUpdate: "更新配置时出错。"
    }
  },
  configuracoesVariaveis: {
    titlePlatform: "平台变量",
    platformVariables: {
      name: "姓名",
      greeting: "问候",
      protocol: "开放协议",
      email: "电子邮件（如果有）",
      phoneNumber: "电话",
      kanban: "看板（如果有）",
      user: "服务员",
      userEmail: "服务员的邮箱",
      firstName: "名",
      lastName: "姓",
      businessName: "企业"
    },
    titleTypebot: "TypeBot 变量",
    typebotVariables: {
      nome: "姓名",
      numero: "数字",
      atendimento: "票号",
      email: "电子邮件（如果有）",
      status: "票证状态",
      canal: "服务渠道",
      grupo: "是否集体护理",
      fullTicket: "所有服务属性"
    }
  },
  configuracoesWebhook: {
    enableWebhook: "启用 webhook",
    enableWebhookCaption: "当激活时，系统将向定义的webhook发送信息。",
    webhookUrlLabel: "Webhook URL：",
    webhookMessage: "接收消息和支持",
    webhookCreateChannel: "创建频道/连接",
    webhookUpdateChannel: "更新频道/连接",
    webhookCreateUser: "创建用户/联系人/机会",
    webhookUpdateUser: "更新用户/联系人/机会",
    webhookCreateApi: "创建 API",
    webhookUpdateApi: "更新 API",
    webhookRenewApi: "更新 API 令牌"
  },
  configuracoesWuzapi: {
    title: "喵呜 API（Wuzapi）设置",
    installApiLabel: "免费安装您的 MEOW API",
    installApiTooltip: "Meow API（Wuzapi）（测试版）",
    apiUrlLabel: "API 网址 (https://subwuzapi.com.br)",
    checkApiStatus: "在新选项卡中检查 API 状态",
    invalidUrlMessage: "请输入有效的 URL 后再继续！",
    globalKeyLabel: "全局密钥",
  },
  configuracoes: {
    tabs: {
      gerais: "常规设置",
      botsIA: "机器人和人工智能",
      integracoes: "集成",
      crm: "客户关系管理",
      sessoes: "会议"
    },
    sidebar: {
      googleCalendar: "Google 日历",
      vapi: "Vapi",
      tutoriais: '教程',
      webchat: "网络聊天",
      groqcloud: "GroqCloud",
      grok: "格罗克",
      gemini: "双子座",
      qwen: "奎文",
      claude: "克劳德",
      deepseek: "深度探索",
      ollama: "奥拉马",
      lm: "LM工作室",
      payment: "支付",
      gerais: "配置。一般的",
      smtp: "SMTP",
      typebot: "打字机器人",
      chatGPT: "GPT 聊天",
      n8n: "N8N",
      dify: "迪菲",
      dialogflow: "对话流",
      webhooks: "Webhook",
      meta: "目标",
      evolution: "进化 API",
      wuzapi: "Wuzapi API",
      hub: "中心通知我",
      sms: "短信",
      kanban: "看板和通道",
      motivos: "需求",
      variaveis: "变量",
      sessoes: "列出会话"
    },
    tooltips: {
      toggleSidebar: "显示/隐藏菜单"
    }
  },
  configuracoesWebchat: {
    copyCodeError: "复制代码时出错",
    sucessCopy: "代码复制成功！",
    copyCode: "复制代码",
    widgetCode: "网页聊天小部件代码",
    tokenWarning2: "此令牌用于验证您的网络聊天的 WebSocket 连接。请妥善保管，不要与他人分享。",
    generateNewToken: "生成新令牌",
    tokenWarning: "WebChat 连接需要令牌。",
    autenticationToken: "身份验证令牌",
    title: "网页聊天设置",
    enableWebchat: "启用 WebChat",
    enableWebchatCaption: "当激活时，系统将使用 WebChat。",
    webchatUrlLabel: "网聊网址：",
    webchatConfigurado: "网络聊天已配置完毕并可供使用。",
    wssFuncionando: "WebSocket 连接工作正常。",
    gerarWidget: "您可以生成小部件以在您的网站上实现。",
    wssNaoFuncionando: "Webchat 已配置，但 WebSocket 连接不起作用。",
    verificarWss: "验证 WebSocket 服务器是否在线且可访问。",
    solicitarInstalacao: "要使用网络聊天，您必须要求系统管理员安装网络聊天界面。",
    configurarAmbiente: "需要在环境中配置WSS_URL和WSS_PORT设置。",
    selecionarCanal: "选择生成小部件的渠道",
    gerarWidgetBtn: "生成小部件",
    widgetGerado: "小部件生成成功！",
    erroGerarWidget: "生成小部件时出错",
    carregandoCanais: "正在加载频道...",
    erroCarregarCanais: "加载频道时出错",
    tenantErro: "加载租户时出错",
    tokenUpdated: "令牌更新成功！",
    tokenError: "生成新令牌时出错。再试一次"
  },
  configuracoesModalCampanha: {
    create: "创建车道",
    edit: "编辑巷",
    name: "车道名称",
    position: "位置",
    notifications: {
      created: "巷道创建！",
      updated: "步骤已编辑！"
    }
  },
  configuracoesModalMotivos: {
    create: "创造需求",
    edit: "编辑需求",
    name: "需求名称",
    notifications: {
      created: "需求被创造！",
      updated: "需求已编辑！"
    }
  },
  configuracoesGerais: {
    labels: {
      allowPause: "允许暂停服务",
      useUserBusinessHours: "使用用户业务时间",
      scanContacts: '扫描没有LID的联系人',
      postmanLink: 'Postman 链接',
      listarPelaUltimaMensagem: "按最后一条消息列出服务",
      forceReason: "关闭服务时强制需求定义",
      syncTicketData: "更新票务日期",
      controlFeatures: "功能控制",
      syncMessagesUpdate: "导入消息的更新日期",
      ignoreIgStories: "静音 Instagram 故事",
      audioPlugin: "使用音频插件（测试版）",
      audioModule: "使用 Waves 音频模块（测试版）",
      showGroupsForAll: "向所有用户显示群组",
      persistirMedia: "持久媒体下载（百利甜酒）",
      showClosedForAll: "向所有用户显示已关闭",
      waitProcessing: "通过外部集成（Typebot、ChatGPT……）启用等待消息处理",
      openChat: "启用窗口外的 Waba 消息发送（不保证送达）",
      shutdownWallet: "启用钱包功能时禁用外部集成",
      notViewAssignedTickets: "不要查看已经分配给其他用户的票证",
      notViewTicketsChatBot: "不要在 ChatBot 中查看工单",
      directTicketsToWallets: "通过钱包强制服务",
      ticketNulo: "查看未分配用户或队列的工单",
      supervisor: "删除主管查看权限",
      semRedis: "使用快速消息发送",
      chatbotLane: "启用聊天机器人服务指南",
      chatbotFix: "将连接固定在服务顶部",
      ignoreGroupMsg: "忽略群组消息",
      rejectCalls: "拒绝 Whatsapp 上的来电",
      callRejectMessage: "拒绝连接时的消息：",
      agruparTickets: "显示消息历史记录",
      transbordo: "消息溢出",
      atualizarNomes: "接收消息时不更新名称",
      forcarAdmin: "强制管理员支持",
      signed: "禁用签名控制",
      universalCounter: "顶部标签中的计数器（私人/群组）",
      autoClose: "无需交互即可自动解决服务问题",
      autoCloseTime: "选择一个选项（时间以分钟为单位）",
      autoCloseMessage: "结束语",
      ticketLimit: "过滤旧通话",
      days: "天",
      ticketLimitDaysAgo: "筛选日期前",
      notificationSilenced: "声音通知",
      forbiddenNumbers: "平台上屏蔽的号码",
      resetFlow: "重置聊天机器人流程",
      maxRetries: "发送时间消息的最大次数",
      privateMessageLimit: "内部聊天消息数",
      ticketLimitNumber: "咨询票数量",
      validateAllContacts: "验证所有联系人",
      forcePendingUser: "强制当前用户将状态更改为待定",
      chatbotFlow: "服务机器人的主动流程",
      forcePending: "强制当前用户更改待处理服务状态",
      maxAttemps: "应向客户发送服务时间消息的最大次数。",
      limitTickets: "服务期间必须查阅的票数。",
      limitePrivate: "每个服务的内部聊天中必须加载的消息数量。",
      erroMessage: "发送已停止的消息",
      solveMessage: "解析消息",
      validate: "验证所有联系人",
      minutes: "10分钟",
      hours: "1小时",
      day: "1天",
      days5: "5天",
      days10: "10天"
    },
    captions: {
      allowPause: "当您激活此选项时，系统将允许暂停服务。",
      useUserBusinessHours: "当您激活此选项时，系统将使用用户业务时间来定义服务时间。",
      scanContacts: "当您激活此选项时，系统将扫描所有没有 LID 的联系人并更新它们。",
      postmanLink: "当您更改 Postman 链接时，系统将更新 API 页面上的集合。",
      listarPelaUltimaMensagem: "激活此选项后，系统将按收到的最后一条消息列出呼叫。",
      forceReason: "当激活此选项时，系统将在关闭服务时要求定义需求。",
      syncTicketData: "通过启用此选项，系统将把票证的日期更新为最新消息的时间。",
      controlFeatures: "通过启用此选项，系统将控制用户的查看和强制关闭功能。",
      syncMessagesUpdate: "通过启用此选项，系统将把导入的消息的日期更新为原始时间。",
      ignoreIgStories: "启用此选项后，Instagram Stories 将被忽略。",
      audioPlugin: "启用此选项将使用新的测试版音频插件。",
      audioModule: "通过启用此选项，将使用带有声波的新音频模块。",
      showGroupsForAll: "通过启用此选项，所有用户都将可以看到群组。",
      persistirMedia: "通过启用此选项，将连续尝试下载通过非官方 Baileys API 接收的媒体。",
      showClosedForAll: "通过启用此选项，所有用户都可以看到“已关闭”状态。",
      waitProcessing: "当收到多条支持消息时，系统只有在回复第一条消息后才会处理新消息。在此期间收到的消息将不会与外部集成交互。",
      openChat: "即使对话窗口未打开，也可以在发送任何模板后发送 WABA 消息。不保证消息的传递。查看 Waba 政策",
      shutdownWallet: "通过启用此选项，当钱包功能处于活动状态并收到新票证时，ChatGPT、Typebot 等外部集成将被禁用。",
      notViewAssignedTickets: "只有票证所有者和管理员可以查看。",
      notViewTicketsChatBot: "没有用户可以看到 ChatBot 处理的票证。",
      directTicketsToWallets: "为客户投资组合所有者提供服务。",
      ticketNulo: "所有用户都将看到没有指定用户或队列的约会。",
      supervisor: "主管将遵循常见的用户逻辑。",
      semRedis: "消息将无节奏地发送。",
      chatbotLane: "将添加 ChatBots 的独家指南。",
      ignoreGroupMsg: "系统不会为团体开票。",
      rejectCalls: "音频和视频通话将收到以下消息。",
      agruparTickets: "显示与频道和联系人相关的所有消息。",
      transbordo: "如果用户离线，则基于卡的服务会溢出。",
      atualizarNomes: "不更新收到的消息中的联系人姓名。",
      forcarAdmin: "待处理的票证将分配给管理员。",
      signed: "用户无法禁用订阅。",
      universalCounter: "在顶部标签中显示开放票务柜台。",
      autoClose: "空闲呼叫将被自动解决。",
      ticketLimit: "过滤旧呼叫。",
      notificationSilenced: "接收音频通知。",
      forbiddenNumbers: "平台上被屏蔽的号码列表。",
      validateAllContacts: "验证系统中所有联系人的数量。",
      resetFlow: "重置新服务的活动流。",
      maxRetries: "发送离开消息的最大数量。",
      privateMessageLimit: "每个服务的内部聊天消息数量。",
      ticketLimitNumber: "一次咨询的票数。",
      chatbotFlow: "Bot 用于新服务的流程",
      chatbotFlowReset: "重置聊天机器人流程",
      chatbotFix: "通过启用此选项，连接将不再浮动在页脚中，而是固定在服务列表的顶部。",
      forcePending: "通过启用此选项，当票证状态从开放变为待处理时，用户将保持与服务的关联。",
      maxAttemps: "在此处输入每个服务可以发送缺席消息的次数...",
      limitTickets: "在此处输入应在服务屏幕上搜索的票数...",
      limitePrivate: "在此处输入应在内部聊天中搜索的消息数量...",
      erroMessage: "该命令将向系统发送卡住的消息。",
      solveMessage: "此命令将从系统中删除错误消息。",
      validate: "此命令将验证系统中所有联系人的数量。",
      validating: "请稍候，正在验证所有系统联系人..."
    },
    notifications: {
      scanContactsSuccess: "联系人已更新成功！",
      scanContactsError: "更新联系人时出错",
      updatingMessagesDate: "更新导入消息的日期...",
      success: "配置更改成功。",
      error: "更改配置时出错。",
      warningTicketSettings: "您不能同时使用以下设置：分配给其他用户的工单、ChatBot 中的工单以及未分配队列或用户的工单。",
      processStarted: "进程已启动。",
      contactsValidated: "联系人已验证。",
      errorValidatingContacts: "验证联系人时出错",
      sendingMessages: "尝试发送待处理的消息。",
      errorSendingMessages: "发送消息时出错",
      configChanged: "配置已更改",
      baileysGroupWarning: "注意：非官方 Baileys API 在使用群组时可能会出现不稳定性。"
    },
    dialogs: {
      confirmationTitleScanContacts: "您是否要扫描所有没有 LID 的联系人？",
      scanContacts: "扫描没有 LID 的联系人",
      confirmationTitle4: "您是否要将票证日期更新为最新消息的时间？",
      syncTicketData: "通过启用此选项，系统将把票证的日期更新为最新消息的时间。",
      confirmationTitle: "您想发送/解决系统中所有卡住的消息吗？",
      resolvePendingMessages: "解决系统中卡住的消息",
      sendPendingMessages: "发送系统中卡住的消息",
      confirmationTitle2: "您想更新同步消息的日期吗？",
      updateMessagesDate: "导入消息的更新日期",
      confirmationTitle3: "请注意，系统中的联系号码过多可能会导致 WhatsApp 被阻止。您想批量验证所有联系人吗？",
      validateAllContacts: "批量验证所有系统联系人。"
    }
  },
  configuracaoPagamentoAtraso: {
    title: "付款信息",
    status: {
      pending: "待办的",
      overdue: "逾期",
      paid: "有薪酬的"
    },
    dueDate: "到期",
    paymentLink: "付款链接",
    checkPaymentStatus: "检查发票状态",
    invalidUrlMessage: "请输入有效的 URL 后再继续！"
  },
  configuracaoTenantSmtp: {
    title: "SMTP 设置",
    enableSmtp: "启用 SMTP",
    enableSmtpCaption: "激活后，系统将发送信息到用户的邮箱。",
    emailHost: "电子邮件服务器（主机）：",
    emailPort: "SMTP 端口",
    emailUser: "电子邮件用户：",
    emailPass: "电子邮件密码：",
    secureProtocol: "安全协议",
    secureProtocolCaption: "启用安全协议。",
    successMessage: "配置更改成功。",
    errorMessage: "更改配置时出错。",
    toggleOn: "已启用",
    toggleOff: "已禁用",
    label: "配置。 SMTP"
  },
  contactsModal: {
    updateNameSuccessMessage: '姓名更新成功！',
    updateNameButton: '更新姓名',
    updateLidButton: '更新 LID',
    updateLidSuccessMessage: 'LID 更新成功！',
    placeholderLid: 'WhatsApp-LID',
    hintLid: 'WhatsApp-LID',
    labelLid: 'WhatsApp-LID',
    titleAdd: "添加联系人",
    titleEdit: "编辑联系方式",
    labelName: "姓名",
    labelNumber: "数字",
    labelEmail: "电子邮件",
    labelCpf: "CPF/CNPJ",
    labelBirthday: "生日日期",
    labelFirstName: "名",
    labelLastName: "姓",
    labelBusinessName: "企业",
    labelMessengerId: "Messenger ID",
    labelInstagramPK: "Instagram ID",
    labelhubWhatsapp: "Whatsapp Hub ID",
    placeholderhubWhatsapp: "Whatsapp Hub ID",
    hinthubWhatsapp: "Whatsapp Hub ID",
    walletSectionTitle: "文件夹",
    walletNoAvailable: "哎呀...没有可用的钱包！！",
    tagSectionTitle: "标签",
    tagNoAvailable: "哎呀...没有可用的标签！！",
    additionalInfoSectionTitle: "附加信息",
    saveButtonLabel: "节省",
    exitButtonLabel: "外出",
    createSuccessMessage: "聯絡已建立！",
    editSuccessMessage: "联系方式已编辑！",
    removeInfoErrorMessage: "删除附加信息时出错。",
    validationErrorMessage: "哎呀！检查错误...",
    errorContact: "创建联系人时出错",
    invalidContact: "联系方式无效",
    errorUsers: "加载用户时出现问题",
    errorTags: "加载标签时出现问题",
    placeholderNumber: "+直拨 (DDD) 99999 9999",
    hintNumber: "如果系统中存在活动的 WABA 连接，则必须输入准确的 WhatsApp 帐号。",
    placeholderCpf: "CPF/CNPJ",
    hintCpf: "CPF/CNPJ 号码必须包含破折号和斜线等特殊字符。",
    placeholderBirthday: "1990年1月1日",
    hintBirthday: "出生日期必须以 01/01/1990 格式输入。",
    placeholderFirstName: "名",
    hintFirstName: "名",
    placeholderLastName: "姓",
    hintLastName: "姓",
    placeholderBusinessName: "企业",
    hintBusinessName: "企业",
    placeholderMessengerId: "Messenger ID",
    hintMessengerId: "Messenger ID",
    placeholderInstagramPK: "Instagram ID",
    hintInstagramPK: "Instagram ID"
  },
  contacts: {
    forbidden: "仅管理员可删除有已登记工单或机会的联系人。",
    deleteSelectedContacts: "是否删除选中的 {count} 个联系人？",
    warning1DeleteSelect: "联系人ID {contactId} 有已登记的工单。是否强制删除？",
    warning2DeleteSelect: "联系人ID {contactId} 有已登记的机会。是否强制删除？",
    deleteCanceled: "用户已取消强制删除",
    deleteError: '强制删除联系人时出错',
    deleteMessage: '联系人已成功强制删除',
    deleteTitle: '强制删除',
    warning1: '此联系人有已注册的工单。确定要强制删除吗？（这将删除所有相关工单和消息）',
    warning2: '此联系人有已注册的机会。确定要强制删除吗？（这将删除所有相关机会）',
    agruparLid: "按LID分组联系人",
    agruparLidTitle: "按LID分组联系人",
    agruparLidMessage: "启用此选项后，具有相同WhatsApp LID的联系人将被合并为一个联系人。",
    lid: "WhatsApp LID",
    tableTitle: "联系方式",
    searchPlaceholder: "定位",
    walletFilterLabel: "按投资组合筛选",
    tagFilterLabel: "按标签过滤",
    syncContactsLabel: "同步联系人",
    syncGroupsLabel: "同步组",
    removeDuplicatesLabel: "删除重复项",
    checkDigit: "校验第九位数字 (BR)",
    addContactLabel: "添加联系人",
    importContactsLabel: "导入联系人",
    importWarning: "该文件必须包含名称和编号列",
    exportContactsLabel: "导出联系人",
    photoColumn: "照片",
    nameColumn: "姓名",
    whatsappColumn: "WhatsApp",
    businessColumn: "企业",
    telegramColumn: "电报",
    messengerColumn: "信使",
    instagramColumn: "Instagram",
    hubWaba: "瓦巴（枢纽）",
    emailColumn: "电子邮件",
    cpfColumn: "中央公积金",
    birthdayColumn: "生日",
    firstNameColumn: "名",
    lastNameColumn: "姓",
    businessNameColumn: "企业",
    walletColumn: "文件夹",
    validateContact: "验证联系人",
    validateContactWarning: "选择验证联系人选项时，您必须有一个活动连接来验证联系人。与非官方 API 一起使用时，验证太多数字可能会导致阻塞。",
    tagsColumn: "标签",
    kanbanColumn: "看板",
    actionsColumn: "行动",
    blockContactColumn: "阻止联系",
    blockChatbotColumn: "阻止聊天机器人",
    confirmSyncContactsTitle: "注意力！！您确实要同步联系人吗？",
    confirmSyncContactsMessage: "您曾经在 WhatsApp 上聊过的所有联系人都将被创建。这可能需要一段时间...",
    confirmRemoveDuplicatesTitle: "注意力！！您想删除重复的联系人吗？",
    confirmRemoveDuplicatesMessage: "所有票证和消息都将分配给最早的重复联系人......",
    confirmSyncGroupsTitle: "注意力！！您确实要同步群组吗？",
    confirmSyncGroupsMessage: "您曾经在 WhatsApp 上聊过的所有群组都将被创建。这可能需要一段时间...",
    deleteContactTitle: "注意力！！您确实要删除该联系人吗？",
    deleteContactSuccess: "聯絡人已刪除！",
    syncInProgressMessage: "这可能需要一段时间...",
    blockContactSuccess: "锁状态更新成功！",
    blockContactError: "更新锁状态时出错。",
    blockChatbotSuccess: "聊天机器人阻止状态更新成功！",
    blockChatbotError: "更新聊天机器人阻止状态时出错。",
    downloadModelLabel: "下载模板",
    selectDestiny: "选择目的地",
    modelDownloadHint: "姓名；号码；电子邮件；CPF；出生日期；名字；姓氏；公司",
    uploadFileLabel: "导入联系人",
    fileUploadHint: "该文件必须包含名称和编号列",
    noTagsAvailable: "哎呀...没有创建标签！",
    noTagsAvailableWarning: "在系统管理中注册新的标签。",
    noWalletsAvailable: "哎呀...没有可用的钱包！",
    downloadCsvHint: "以 CSV 格式下载模板。",
    saveButton: "节省",
    cancelButton: "取消",
    coluumnsButton: "列",
    block: "堵塞",
    blockBot: "阻止聊天机器人",
    queueDestiny: "目标队列",
    userDestiny: "目标用户",
    dialog: {
      contact: "接触",
      selectChannel: "选择要启动服务的频道。",
      start: "开始",
      cancel: "取消",
      confirmDelete: "您确实要删除该联系人吗？",
      syncContactsTitle: "同步联系人",
      syncContactsMessage: "所有联系人都将被创建。这可能需要一段时间...",
      syncGroupsTitle: "同步组",
      syncGroupsMessage: "将创建所有组。这可能需要一段时间...",
      removeDuplicatesTitle: "删除重复的联系人",
      checkDigitTitle: "处理巴西数字的第九位数字",
      removeDuplicatesMessage: "所有票证将分配给最早的联系人。",
      checkDigitMessage: "电话号码不正确的联系人以及票证和消息将被删除。这是根据 WhatsApp 的一般第九位数字规则对巴西号码的处理。 DDD 大于 30 通常不会获得 9。"
    },
    notifications: {
      existingTicket: "目前已有",
      existingTicketDetails: "已有服务正在进行中",
      contactDeleted: "聯絡人刪除成功！",
      deleteError: "删除联系人时出错。",
      tokenUpdateError: "刷新令牌时出错。",
      started: "服务已启动",
      importInProgress: "正在导入。",
      importCaption: "一旦完成，页面将刷新。",
      importSuccess: "联系人导入成功！",
      importError: "导入联系人时出错。",
      loadQueuesError: "加载队列时出错。",
      loadSynError: "同步错误。",
      loadUsersError: "加载用户时出错。",
      ticketTransferred: "票证已成功转让。",
      exportError: "导出联系人时出错。",
      syncContact: "聯絡人正在更新。这可能需要一段时间...",
      syncGroups: "群组正在更新。这可能需要一段时间..."
    },
    actions: {
      blockBot: "阻止聊天机器人",
      queueDestiny: "目标队列",
      userDestiny: "目标用户"
    }
  },
  customizar: {
    logoDark: {
      title: "深色标志",
      chooseFile: "选择文件",
      upload: "上传",
      current: "当前深色标志"
    },    
    forceLogout: {
      title: "每个租户的强制注销配置",
      description: "配置每个租户是否启用或禁用单一会话（强制注销）",
      selectTenant: "选择租户",
      forceLogout: "强制注销",
      enabled: "已启用",
      disabled: "已禁用",
      forceLogoutEnabled: "强制注销已启用",
      forceLogoutDisabled: "强制注销已禁用",
      warning1: "单一会话已启用 - 用户在其他设备登录时将被注销",
      warning2: "单一会话已禁用 - 用户可以在多个设备上登录"
    },
    masterkey: {
      generateRandom: "生成随机",
      title: "MasterKey配置",
      description: "为应用程序配置MasterKey",
      enabled: "MasterKey已启用",
      disabled: "MasterKey已禁用",
      lastUsed: "MasterKey使用日志",
      keyLabel: "MasterKey",
      warningTitle: "注意！！",
      warningText: "MasterKey是应用程序的唯一访问密钥。请将其保存在安全的地方，不要与任何人共享。此密钥只能由Tenant 1的超级管理员编辑"
    },    
    tabs: {
      masterkey: "MasterKey",
      colors: "颜色",
      branding: "品牌",
      tutorials: "教程",
      forceLogout: "强制注销"
    },
    title: "定制应用程序",
    chooseColors: "选择颜色",
    colors: {
      neutral: "中性色",
      primary: "原色",
      secondary: "辅助颜色",
      accent: "高亮颜色",
      warning: "警告颜色",
      negative: "负片颜色",
      positive: "正色",
      light: "浅色"
    },
    saveColors: "保存颜色",
    applyColors: "应用颜色变化",
    logo: {
      title: "标识",
      chooseFile: "选择文件",
      upload: "上传",
      current: "当前徽标"
    },
    favicon: {
      title: "网站图标",
      chooseFile: "选择文件",
      upload: "上传",
      current: "当前图标"
    },
    video: {
      title: "视频（主页）",
      chooseFile: "选择文件",
      upload: "上传",
      current: "当前视频"
    },
    appName: {
      title: "应用程序名称",
      label: "姓名",
      update: "更新名称"
    },
    frontend: {
      rebuildTitle: "应用徽标、图标和名称更改",
      warning: "此更改仅对维护自动安装程序的默认文件夹和用户的安装有效。",
      rebuildMessage: "请稍候，正在将更改应用到您的前端...您的前端当前正在重建。",
      rebuildButton: "应用更改"
    },
    notifications: {
      errorVideoSize: "选定的视频太大。最大尺寸为 5MB。",
      errorLogo: "文件格式无效。仅允许 JPG、JPEG 和 PNG",
      errorIcon: "文件格式无效。仅允许 ICO 文件",
      successLoadColors: "颜色加载成功。",
      errorLoadColors: "加载颜色时出错。",
      successSaveColors: "颜色保存成功。",
      errorSaveColors: "保存颜色时出错。",
      successUploadLogo: "徽标发送成功。",
      errorUploadLogo: "发送徽标时出错。",
      successUploadIcon: "图标发送成功。",
      errorUploadIcon: "发送图标时出错。",
      successRebuildFrontend: "前端成功重建。",
      errorRebuildFrontend: "重建前端时出错。",
      successUpdateAppName: "应用程序名称更新成功。",
      errorUpdateAppName: "更新应用程序名称时出错。"
    }
  },
  equipes: {
    title: "团队",
    columns: {
      id: "#",
      group: "团队",
      isActive: "积极的",
      actions: "行动"
    },
    actions: {
      addUser: "添加/删除用户",
      edit: "编辑团队",
      delete: "删除团队"
    },
    notifications: {
      deleted: "群组 {group} 已删除！",
      errorLoading: "加载群组时出错。",
      errorDelete: "删除群组时出错。",
      created: "团队创建成功！",
      updated: "团队更新成功！"
    },
    dialog: {
      deleteTitle: "注意力！！",
      deleteMessage: "您确实要删除群组“{group}”吗？"
    },
    modal: {
      titleCreate: "创建团队",
      titleEdit: "编辑团队",
      nameLabel: "团队名称",
      activeLabel: "积极的",
      cancelButton: "取消",
      saveButton: "节省",
      notifications: {
        created: "团队创建成功！",
        updated: "團隊編輯成功！",
        error: "儲存小隊時錯誤。"
      }
    },
    modalUser: {
      title: "管理团队用户",
      placeholder: "选择要添加的用户",
      tooltip: "从列表中选择或取消选择用户。",
      saveButton: "节省",
      closeButton: "关闭",
      notifications: {
        updated: "用户已更新！",
        error: "更新用户时出错！"
      }
    }
  },
  etiquetas: {
    title: "标签",
    columns: {
      id: "#",
      tag: "标签",
      color: "颜色",
      isActive: "积极的",
      actions: "行动"
    },
    notifications: {
      created: "标签创建成功！",
      updated: "标签更新成功！",
      deleted: "标签 {tag} 已删除！",
      errorLoading: "加载标签时出错。",
      errorDelete: "删除标签时出错。"
    },
    dialog: {
      deleteTitle: "注意力！！",
      deleteMessage: "您确实要删除标签“{tag}”吗？"
    }
  },
  modalEtiqueta: {
    titleCreate: "创建标签",
    titleEdit: "编辑标签",
    nameLabel: "标签名称",
    colorLabel: "颜色",
    activeLabel: "积极的",
    cancelButton: "取消",
    saveButton: "节省",
    notifications: {
      created: "标签创建成功！",
      updated: "标签编辑成功！",
      error: "保存标签时出错。"
    }
  },
  fechamento: {
    title: "告别",
    messageLabel: "信息",
    userLabel: "用户",
    dateLabel: "日期",
    actionsLabel: "行动",
    deleteAllButton: "全部删除",
    searchPlaceholder: "定位",
    deleteConfirmation: "您确实要删除 Farewell“{id}”吗？",
    deleteAllConfirmation: "您确实要删除所有告别记录吗？",
    deleteSuccess: "告别已成功删除！",
    deleteAllSuccess: "所有告别已成功删除！",
    notifications: {
      error: "处理请求时出错。"
    },
    system: "系统"
  },
  modalDespedida: {
    titleCreate: "创建告别",
    titleEdit: "编辑告别",
    label: "告别",
    notifications: {
      created: "告别创建成功！",
      updated: "告别编辑成功！",
      error: "保存告别时发生错误。"
    }
  },
  filas: {
    title: "队列",
    notifications: {
      created: "队列创建成功！",
      updated: "队列编辑成功！",
      deleted: "队列删除成功！",
      error: "处理队列时发生错误。"
    },
    confirmDelete: "您确实要删除队列“{name}”吗？"
  },
  modalFila: {
    title: {
      create: "创建队列",
      edit: "编辑队列"
    },
    notifications: {
      created: "队列创建成功！",
      updated: "队列编辑成功！",
      error: "处理队列时发生错误。"
    },
    labels: {
      name: "队列名称"
    }
  },
  horarioAtendimento: {
    title: "营业时间",
    tooltips: {
      open: "开放时间： 全天开放。不会发送缺席消息。",
      closed: "休息日：场所全天关闭。无论何时都会发送离开消息。",
      schedule: "时间表：代表机构的营业时间。离开消息将在规定时间之外发送。",
      important: "**重要提示：自动服务结束后将会发送缺席消息。"
    },
    labels: {
      closed: "关闭",
      absenceMessage: "离开消息",
      time: "到",
      holidays: "假期",
      holidayDate: "假期日期",
      holidayDescription: "节日描述",
      addHoliday: "添加假期",
      holidaysInfo: "节假日是机构不营业的日子。这些天将被视为休息日。"
    },
    notifications: {
      scheduleUpdated: "更新了营业时间。",
      absenceMessageUpdated: "离开消息已更新。",
      holidaysUpdated: "假期更新成功！"
    }
  },
  businessHours: {
    days: {
      0: "星期日",
      1: "周一",
      2: "周二",
      3: "周三",
      4: "周四",
      5: "星期五",
      6: "周六"
    },
    types: {
      O: "打开",
      C: "关闭",
      H: "时间",
      L: "发布",
      B: "已阻止"
    },
    labels: {
      start: "开始",
      end: "结尾",
      to: "直到"
    },
    notifications: {
      updated: "营业时间已成功更新。"
    },
    warnings: {
      overlap: "时间表不能重叠。调整间隔。",
      invalidTime: "时间必须介于 00:01 至 23:59 之间。",
      invalidHour: "无效时间"
    }
  },
  kanbanMenu: {
    kanban: "看板",
    tags: "标签"
  },
  kanbans: {
    cardsLoaded: "卡片已成功加载！",
    contactTitle: "接触",
    title: "服务可视化管控",
    loadingMessage: "请稍候，正在加载看板信息...",
    attendances: "服务",
    contacts: "联系方式",
    removeAttendanceTitle: "从仪表板中删除服务",
    removeAttendanceMessage: "您想删除该服务吗？",
    startAttendance: "选择要启动服务的频道。",
    existingTicketMessage: "{title} 有一项正在进行的服务。您要開啟服務嗎？",
    existingTicketAdminOnly: "{title} 有一项正在进行的服务。只有管理员可以为您分配此服务。",
    loadingNewData: "正在加载看板中的新数据...请稍候！",
    successEdit: "所有卡片已成功编辑！",
    contactEdited: "聯絡人編輯成功！",
    contactEditError: "编辑联系人时出错",
    kanbanUpdated: "看板更新成功！",
    openAttendance: "开放服务",
    selectChannel: "选择要启动服务的频道。",
    contactHasTicket: "{title} 有一项正在进行的服务。您要開啟服務嗎？",
    adminOnlyTicket: "{title} 有一项正在进行的服务。只有管理员可以为您分配此服务。",
    successEditCards: "所有卡片已成功编辑！",
    loadingKanban: "正在加载看板中的新数据...请稍候！",
    tokenUpdateError: "无法刷新令牌。",
    fetchingContactsError: "获取联系人时出错。",
    noNameAvailable: "姓名不可用",
    fetchingKanbansError: "列出看板时出错。"
  },
  tagsKanban: {
    contacts: "联系人",
    title: "在看板中查看标签",
    description: "仅供查看，操作卡片时无法保存标签。",
    loading: "正在加载看板中的新数据...请稍候！",
    removeTitle: "从仪表板中删除服务",
    removeMessage: "您想删除该服务吗？",
    cardEdited: "联系方式已编辑！",
    startService: "选择要启动服务的频道。",
    serviceStarted: "服务已启动",
    contactError: "删除联系人时发生错误。",
    kanbanError: "列出看板时出错。",
    cardsSaved: "所有卡片已成功编辑！",
    saveError: "编辑联系人时发生错误。",
    existingServiceTitle: "持续服务",
    existingServiceMessageUser: "{title} 有一项正在进行的服务。只有管理员可以为您分配此服务。",
    existingServiceMessageAdmin: "{title} 有一项正在进行的服务（服务：{ticketId} - 队列：{queueId}）。您要開啟服務嗎？",
    tokenError: "无法刷新令牌。",
    buttons: {
      yes: "是的",
      no: "不",
      ok: "好的"
    }
  },
  cardsTags: {
    title: "标签卡",
    description: "查看联系人的详细信息。",
    tagsTooltip: "标签",
    walletTooltip: "文件夹",
    actions: {
      whatsapp: "WWebJs 支持",
      baileys: "百利甜酒服务",
      meow: "喵服务",
      evo: "Evo 服务",
      waba: "Waba 服务"
    },
    phoneTooltip: "电话",
    removeTooltip: "消除"
  },
  cardsKanbans: {
    title: "看板卡",
    description: "查看联系人的详细信息。",
    tagsTooltip: "标签",
    walletTooltip: "文件夹",
    actions: {
      whatsapp: "WWebJs 支持",
      baileys: "百利甜酒服务",
      meow: "喵服务",
      evo: "Evo 服务",
      waba: "Waba 服务",
      remove: "消除"
    },
    phoneTooltip: "电话"
  },
  lanes: {
    title: "看板通道",
    actions: "行动",
    add: "添加新车道",
    edit: "编辑巷",
    deleteConfirm: "您确实要删除看板“{name}”吗？",
    deleteSuccess: "看板 {name} 删除成功！",
    columns: {
      id: "ID",
      name: "车道",
      actions: "行动"
    },
    notifications: {
      loadError: "加载车道时出错。",
      deleteError: "删除车道时出错。"
    }
  },
  modalLanesKanban: {
    createTitle: "创建看板",
    editTitle: "编辑看板",
    nameLabel: "看板名称",
    createSuccess: "看板创建成功！",
    updateSuccess: "看板更新成功！",
    notifications: {
      error: "处理看板时出错。"
    }
  },
  modalMensagemRapida: {
    createTitle: "创建快速消息",
    editTitle: "编辑快速消息",
    idLabel: "ID",
    keyLabel: "钥匙",
    keyHint: "键是用户搜索消息的快捷方式。",
    messageLabel: "信息",
    placeholder: "输入消息",
    sendAsAudio: "以录音形式发送",
    fileLabel: "选择文件",
    removeFile: "删除文件",
    saveSuccess: {
      create: "快速消息创建成功！",
      update: "快速消息更新成功！"
    },
    saveError: "保存快速消息时发生错误。",
    variablesLabel: "变量",
    emojiLabel: "表情符号",
    variablesList: {
      0: {
        label: "姓名",
        value: "{{姓名}}"
      },
      1: {
        label: "问候",
        value: "{{问候}}"
      },
      2: {
        label: "协议",
        value: "{{协议}}"
      },
      3: {
        label: "电子邮件（如有）",
        value: "{{电子邮件}}"
      },
      4: {
        label: "电话",
        value: "{{phoneNumber}}"
      },
      5: {
        label: "看板（如果有）",
        value: "{{看板}}"
      },
      6: {
        label: "陪同人员（如出席）",
        value: "{{用户}}"
      },
      7: {
        label: "服务员电子邮件（如果正在服务）",
        value: "{{用户邮箱}}"
      },
      8: {
        label: "名字（如有）",
        value: "{{名}}"
      },
      9: {
        label: "姓氏（如有）",
        value: "{{姓}}"
      },
      10: {
        label: "公司（如有）",
        value: "{{businessName}}"
      }
    }
  },
  mensagemRapida: {
    title: "快速消息",
    add: "添加快速消息",
    edit: "编辑快速消息",
    create: "创建快速消息",
    key: "钥匙",
    message: "信息",
    file: "文件",
    recordedAudio: "录制的音频",
    noFile: "没有文件",
    fileOpen: "打开文件",
    active: "积极的",
    inactive: "不活跃",
    actions: "行动",
    deleteConfirmation: "您确实要删除密钥消息“{key}”吗？",
    deleteSuccess: "消息删除成功！",
    saveSuccess: {
      create: "快速消息创建成功！",
      update: "快速消息更新成功！"
    },
    saveError: "保存快速消息时发生错误。"
  },
  notas: {
    title: "笔记",
    searchPlaceholder: "定位",
    dateFilterPlaceholder: "按日期过滤",
    note: "注意",
    user: "用户",
    ticket: "服务",
    date: "日期",
    actions: "行动",
    noResults: "未找到任何注释。",
    deleteConfirmation: "您确实要删除注释“{note}”吗？",
    deleteSuccess: "註釋成功刪除！",
    saveSuccess: {
      create: "記錄創建成功！",
      update: "記錄更新成功！"
    },
    saveError: "保存笔记时发生错误。",
    system: "系统"
  },
  modalNotas: {
    titleCreate: "创建笔记",
    titleEdit: "编辑注释",
    noteLabel: "注释编号",
    ticketLabel: "服务",
    saveSuccess: "注释保存成功！",
    saveError: "保存笔记时发生错误。"
  },
  modalNotaAtendimento: {
    titleCreate: "创建笔记",
    titleEdit: "编辑注释",
    labelNote: "服务说明",
    saveSuccess: "注释保存成功！",
    saveError: "保存笔记时发生错误。"
  },
  notificacao: {
    title: "通知",
    add: "添加通知",
    deleteAll: "全部删除",
    deleteOne: "您确实要删除通知“{id}”吗？",
    deleteAllConfirm: "您确实要删除所有通知吗？",
    created: "通知创建成功！",
    updated: "通知更新成功！",
    deleted: "通知删除成功！",
    allDeleted: "所有通知均已删除！",
    columns: {
      id: "#",
      message: "信息",
      userId: "用户身份",
      userName: "用户",
      isRead: "阅读",
      createdAt: "日期",
      actions: "行动"
    },
    isRead: {
      read: "读",
      unread: "未读"
    }
  },
  modalNotificacao: {
    title: {
      create: "创建通知",
      edit: "编辑通知"
    },
    fields: {
      message: "通知"
    },
    notifications: {
      created: "通知创建成功！",
      updated: "通知编辑成功！",
      error: "创建或编辑通知时发生错误。"
    }
  },
  pagamentoTenants: {
    title: "租户付款",
    loading: "请稍候，正在加载租户付款信息...",
    tenantId: "租户 ID",
    paymentInfo: "付款信息",
    columns: {
      id: "付款 ID",
      status: "地位",
      dueDate: "到期",
      bankSlipUrl: "付款链接"
    },
    status: {
      pending: "待办的",
      overdue: "逾期"
    },
    actions: {
      toggleTable: "显示数据"
    }
  },
  planos: {
    title: "计划",
    columns: {
      id: "ID",
      value: "价值",
      connections: "連接",
      users: "用户",
      trial: "审判",
      trialPeriod: "时期",
      actions: "行动"
    },
    buttons: {
      add: "添加计划",
      tokenAsaas: "翅膀令牌",
      viewToken: "查看令牌"
    },
    tooltips: {
      showToken: "显示令牌"
    },
    status: {
      enabled: "积极的",
      disabled: "不活跃"
    },
    messages: {
      deleteConfirmation: "您确实要删除计划“{id}”吗？",
      tokenUpdated: "令牌更新成功！",
      tokenUpdateError: "刷新令牌时出错。"
    }
  },
  modalPlanos: {
    title: {
      edit: "编辑计划",
      create: "创建计划"
    },
    labels: {
      value: "计划价值",
      connections: "連接",
      users: "用户",
      trial: "审判",
      trialPeriod: "试用期（天）"
    },
    warnings: {
      trial: "注意：激活试用后，试用期结束后公司的数据将从系统中删除。"
    },
    buttons: {
      cancel: "取消",
      save: "节省"
    },
    notifications: {
      created: "计划创建成功！",
      updated: "计划更新成功！"
    }
  },
  protocolos: {
    ticketNotFound: "未找到服务",
    title: "协议",
    columns: {
      id: "#",
      protocol: "协议",
      userId: "用户",
      ticketId: "服务",
      createdAt: "日期",
      actions: "行动"
    },
    filter: {
      search: "定位",
      date: "按日期过滤"
    },
    notifications: {
      deleted: "协议已删除！",
      error: "加载更多协议时出错。"
    },
    confirm: {
      delete: "您确实要删除协议“{protocol}”吗？"
    },
    buttons: {
      edit: "编辑",
      delete: "删除"
    }
  },
  modalProtocolo: {
    title: {
      create: "创建协议",
      edit: "编辑协议"
    },
    fields: {
      protocol: "协议编号",
      ticketId: "服务"
    },
    notifications: {
      created: "协议创建成功！",
      updated: "协议编辑成功！",
      error: "保存协议时发生错误。"
    }
  },
  tasks: {
    title: "任务",
    table: {
      headers: {
        id: "ID",
        status: "地位",
        name: "任务",
        description: "描述",
        limitDate: "最后期限",
        owner: "负责任的",
        priority: "优先事项",
        comments: "评论",
        actions: "行动"
      },
      status: {
        delayed: "🚩 迟到",
        pending: "🔄 待定",
        finished: "✅ 已完成"
      },
      priority: {
        high: "⚡⚡⚡ 高",
        medium: "⚡⚡ 平均",
        low: "⚡ 下载",
        none: "😉 无"
      }
    },
    labels: {
      dateFormat: "{日}-{月}-{年}"
    },
    filters: {
      search: "搜索任务",
      status: "地位",
      owner: "负责任的",
      limitDate: "最后期限",
      noResults: "未找到任何任务。"
    },
    modal: {
      createTask: "创建任务",
      editTask: "编辑任务",
      name: "姓名",
      description: "描述",
      limitDate: "最后期限",
      responsible: "负责任的",
      recurrence: "复发",
      recurrenceTimes: "重复次数",
      status: "地位",
      priority: "优先事项",
      comments: "评论",
      recurrenceOptions: {
        none: "无复发",
        sevenDays: "7天",
        thirtyDays: "30天",
        fortyFiveDays: "45天",
        sixtyDays: "60天",
        seventyFiveDays: "75天",
        ninetyDays: "90天"
      },
      statusOptions: {
        delayed: "🚩 迟到",
        pending: "🔄 待定",
        finished: "✅ 已完成"
      },
      priorityOptions: {
        high: "⚡⚡⚡ 高",
        medium: "⚡⚡ 平均",
        low: "⚡ 下载",
        none: "😉 无"
      },
      validation: {
        required: "字段 {field} 为必填项"
      },
      notifications: {
        userLoadError: "加载用户时出现问题。",
        created: "任务创建成功！",
        edited: "任务编辑成功！",
        error: "处理任务时发生错误。"
      }
    },
    notifications: {
      finishSuccess: "任务成功完成！",
      duplicateSuccess: "任务复制成功！",
      checkDelayedError: "检查逾期任务时出错。",
      deleteConfirm: "您确实要删除任务“{name}”吗？",
      deleteSuccess: "任务“{name}”已成功删除！",
      taskCreated: "任务创建成功！",
      taskUpdated: "任务编辑成功！",
      taskDuplicated: "任务复制成功！",
      taskCompleted: "任务成功完成！",
      taskDeleted: "任务删除成功！",
      error: "执行操作时出错",
      loadUsersError: "加载用户时出现问题。",
      loadTasksError: "列出任务时出错。",
      createSuccess: "任务创建成功！",
      updateSuccess: "任务更新成功！"
    },
    tooltip: {
      conclued: "总结",
      duplicate: "复制",
      edit: "编辑",
      delete: "删除"
    }
  },
  tenantApi: {
    table: {
      title: "租户 API",
      columns: {
        id: "ID",
        apiToken: "API 令牌",
        actions: "行动"
      },
      noData: "未找到租户 API。"
    },
    form: {
      create: "创建租户 API",
      edit: "编辑租户 API"
    },
    modal: {
      confirmDelete: "您确定要删除租户 API“{id}”吗？",
      notifications: {
        created: "租户 API 创建成功！",
        updated: "租户 API 更新成功！",
        deleted: "租户 API 删除成功！"
      }
    },
    routes: {
      createTitle: "通过 API 创建/编辑新租户的路线：",
      activateTitle: "通过 API 激活/停用租户的路线：",
      showTitle: "通过 API 显示租户信息的路线：",
      endpoint: "端点",
      bearerToken: "令牌持有者",
      body: "身体"
    }
  },
  modalTenantApi: {
    title: {
      create: "创建 API 租户",
      edit: "编辑租户 API"
    },
    form: {
      apiToken: "API 令牌",
      generateToken: "生成令牌"
    },
    notifications: {
      created: "租户 API 创建成功！",
      updated: "租户 API 更新成功！",
      error: "保存租户 API 时出错。"
    }
  },
  tenant: {
    metrics: {
      actions: "指标",
      title: "指标",
      total: "总出席人数",
      pending: "待处理服务",
      scheduled: "预约",
      open: "开放预约",
      closed: "已结束的预约",
      contacts: "联系方式",
      tickets: "服务",
      messages: "消息",
      sent: "已发送消息",
      received: "收到的消息",
      averageRating: "平均评分",
      totalTickets: "总出席人数",
      totalContacts: "联系人总数",
      totalMessages: "消息总数"
    },
    title: "公司",
    actions: {
      edit: "编辑公司",
      delete: "删除公司",
      calculateFiles: "计算公司文件大小",
      deleteFiles: "删除公司文件",
      toggleHideUnoficial: "禁用非官方"
    },
    columns: {
      id: "#",
      status: "地位",
      name: "姓名",
      maxUsers: "用户限制",
      maxConnections: "连接限制",
      hideUnoficial: "禁用非官方",
      asaas: "翅膀活跃",
      asaasToken: "翅膀令牌",
      asaasCustomerId: "客户ID Asaas",
      identity: "身份",
      trial: "测试",
      trialPeriod: "测试时间",
      createdAt: "日期",
      actions: "行动"
    },
    modals: {
      asaasToken: {
        title: "更改 Asaas 代币",
        tokenLabel: "翅膀令牌",
        save: "保存令牌",
        cancel: "取消"
      }
    },
    notifications: {
      tenantDeleted: "租户 {id} 已成功删除！",
      tenantUpdated: "租户 {id} 更新成功！",
      filesSize: "文件大小：{size} MB",
      deleteFiles: "文件删除成功！",
      deleteError: "删除文件时出错。"
    },
    confirmation: {
      irreversibleAction: "注意：此操作不可逆！",
      deleteTenant: "您确实要删除公司 {id} 吗？",
      deleteFiles: "您确实要删除公司 {id} 的所有文件吗？"
    },
    hideUnoficial: {
      updated: "租户 {id} 更新成功！",
      updateError: "更新租户 {id} 时出错！"
    },
    asaasToken: {
      updated: "Asaas Token 更新成功！",
      updateError: "更新 Asaas 令牌时出错！"
    },
    calcular: {
      size: "文件大小：{size} MB",
      error: "计算文件大小时出错"
    },
    limpar: {
      title: "注意：此操作不可逆！",
      confirmMessage: "您确实要删除公司 {id} 的所有文件吗？",
      success: "租户 {id} 文件已成功删除！",
      error: "清理租户文件时出错！"
    },
    status: {
      active: "积极的",
      inactive: "不活跃"
    },
    asaas: {
      enabled: "积极的",
      disabled: "不活跃"
    },
    trial: {
      enabled: "积极的",
      disabled: "不活跃"
    },
    list: {
      error: "列出租户时出错"
    },
    create: {
      success: "租户 {name} 创建成功！"
    },
    delete: {
      protected: "无法删除租户 {id}！",
      success: "租户 {id} 已成功删除！",
      error: "删除租户时出错：{error}"
    }
  },
  modalTenant: {
    visibleMenu: {
      title: "可见菜单",
      grupos: "团体",
      disparoMassa: "大规模枪击事件",
      kanban: "看板和漏斗",
      tarefas: "任务",
      api: "API",
      chatbot: "聊天机器人",
      relatorios: "报告",
      campanhas: "活动",
      chat: "聊天",
      equipes: "团队"
    },
    title: {
      create: "创建租户",
      edit: "编辑租户"
    },
    fields: {
      status: "地位",
      name: "姓名",
      maxUsers: "用户限制",
      maxConnections: "连接限制",
      identity: "身份",
      asaasToken: "翅膀令牌",
      asaasCustomerId: "客户ID Asaas",
      trialPeriod: "试用期"
    },
    trial: {
      title: "审判",
      enabled: "主动试用",
      disabled: "非活跃试用",
      warning: "注意：激活试用后，试用期结束后公司的数据将从系统中删除。"
    },
    asaas: {
      title: "翅膀",
      enabled: "翅膀活跃",
      disabled: "翅膀未激活"
    },
    validation: {
      requiredFields: "填写所有必填字段并激活公司。",
      cannotDeactivateMain: "无法停用公司 1！"
    },
    notifications: {
      created: "租户创建成功！",
      updated: "租客編輯成功！",
      error: "保存租户时发生错误。"
    }
  },
  tenantsPk: {
    titles: {
      environmentVariables: "环境变量",
      packageJsonData: "JSON 包数据"
    },
    labels: {
      key: "钥匙",
      value: "价值"
    },
    errors: {
      loadEnvData: "加载环境变量数据时出错",
      loadPackageData: "加载包 JSON 数据时出错"
    }
  },
  tenantQueue: {
    title: "任务队列",
    updateQueues: "更新队列",
    openBullBoard: "开放牛市板",
    restartBackend: "重启后端",
    restartQueues: "重置队列",
    queuesUpdated: "队列每 10 秒更新一次",
    refreshQueue: "重新处理队列",
    columns: {
      queueName: "队列名称",
      failedCount: "失败的任务",
      activeCount: "活跃职位",
      waitingCount: "等待中的作业",
      actions: "行动"
    },
    dialogs: {
      restartBackendTitle: "注意力！！您确实要重新启动后端吗？",
      restartBackendMessage: "此过程将重新启动所有服务，并且仅当您有权访问服务器以纠正任何可能的不一致时才应执行。",
      restartQueuesTitle: "注意力！！您确实要重置队列吗？",
      restartQueuesMessage: "仅当 BullBoard 上有大量作业排队时才运行。此过程将重新启动所有 Bull 队列，并且最多应运行 5 次，无需重新启动后端。超过此限制后，重新启动后端以清理与 Redis 的额外连接。"
    },
    notifications: {
      bullBoardRedirect: "用户：admin<br>密码：使用您的 Redis 密码<br>您将在 3 秒后被重定向"
    }
  },
  terminal: {
    title: "终端",
    placeholder: "在此处输入您的命令...",
    sendButton: "发送",
    noOutput: "未收到输出",
    error: "错误： ",
    userNotAllowed: "用户无权访问终端"
  },
  usuarios: {
    title: "用户",
    placeholder: "定位",
    add: "添加",
    email: "电子邮件",
    queues: "队列",
    whatsappAllowed: "連接",
    isOnline: "地位",
    profile: "轮廓",
    actions: "行动",
    blockWavoip: "阻止 Wavoip",
    modals: {
      userManagement: "用户队列管理",
      whatsappManagement: "用户连接管理",
      deleteConfirmation: "注意力！！您确实要删除用户“{name}”吗？"
    },
    notifications: {
      userDeleted: "用户 {name} 已删除！",
      deleteError: "无法删除用户。",
      error: "加载更多用户时出错",
      changeStatusInToolbar: "无法更改登录用户状态。使用个人资料右上角的选项。",
      status1: "用户状态",
      statusOnline: "在线：用户可用",
      statusOffline: "离线：用户不可用",
      statusReload: "要验证前端的更改，用户必须重新加载页面"
    },
    profiles: {
      user: "用户",
      super: "导师",
      admin: "行政人员",
      superadmin: "超级管理员"
    }
  },
  modalFilaUsuario: {
    title: "用户队列",
    name: "姓名",
    email: "电子邮件",
    inactive: "（非活动）",
    successMessage: "用户队列编辑成功！"
  },
  modalUsuario: {
    sipConfigInfo: "SIP 配置（Asterisk、FreeSWITCH、PBX 等）",
    sipWebRTCInfo: "您的扩展程序必须支持 WebRTC",
    sipWSSInfo: "您的扩展程序必须支持 WSS（WebSocket 安全）",
    horarioAtendimento: "营业时间",
    configSip: "SIP配置",
    sipEnabled: "启用 SIP",
    sipUser: "SIP用户",
    sipPassword: "SIP密码",
    sipServer: "SIP服务器",
    sipPort: "SIP端口",
    emailAlreadyExists: "注册错误： ",
    titleEdit: "编辑用户",
    name: "姓名",
    email: "电子邮件",
    password: "密码",
    profile: "轮廓",
    blockWavoip: "阻止 Wavoip",
    visibleMenu: "可见菜单",
    massa: "批量邮寄",
    grupo: "团体",
    chatprivado: "私人聊天",
    kanban: "看板和漏斗",
    tarefas: "任务",
    sessoes: "频道",
    relatorios: "报告",
    filas: "队列",
    equipes: "团队",
    mensagensrapidas: "快速消息",
    chatflow: "聊天机器人",
    agendamentos: "预约",
    aniversarios: "生日",
    fechamento: "结束语",
    etiquetas: "标签",
    notas: "笔记",
    protocolos: "协议",
    avaliacoes: "评论",
    campanhas: "活动",
    blockWavoipHint: "在 Wavoip 中应用更改时，必须清除浏览器缓存（Ctrl+Shift+R）",
    successEdit: "用户已编辑！",
    successCreate: "用户已创建！",
    errorLimit: "已达到用户限制。",
    errorValidation: "哎呀！检查错误..."
  },
  modalWhatsappUsuario: {
    title: "用户连接（测试版）",
    name: "姓名",
    email: "电子邮件",
    successMessage: "用户连接编辑成功！"
  },
  usuariosTenants: {
    title: "用户",
    tenant: "租户",
    id: "ID",
    name: "姓名",
    email: "电子邮件",
    profile: "轮廓",
    actions: "行动",
    filterPlaceholder: "定位",
    deleteConfirmation: {
      title: "注意力！！您确实要删除用户“{name}”吗？",
      successMessage: "用户 {name} 删除成功！",
      errorMessage: "无法删除用户"
    }
  },
  modalUsuariosTenants: {
    title: "编辑用户",
    tenantLabel: "租户",
    nameLabel: "姓名",
    emailLabel: "电子邮件",
    passwordLabel: "密码",
    profileLabel: "轮廓",
    saveSuccess: "用户已编辑！",
    createSuccess: "用户已创建！",
    validationError: "哎呀！检查错误...",
    userLimitError: "已达到用户限制。",
    warning: "应用更改时，清除浏览器缓存（Ctrl+Shift+R）。"
  },
  wavoip: {
    title: "链接列表",
    subTitle: "输入您的 Wavoip 帐户电子邮件和密码",
    emailLabel: "电子邮件",
    passwordLabel: "密码",
    authorizeButton: "授权列出连接",
    callsTitle: "链接",
    logsDownloaded: "日志下载成功！",
    confirmClear: "您确实要清除日志吗？",
    confirmClearMessage: "此操作无法撤消。",
    logsCleared: "日志清理成功！",
    downloadLogs: "下载日志",
    clearLogs: "清除日志",
    logsTitle: "日志",
    logsSubtitle: "Wavoip连接日志",
    eventSummary: "活动概要",
    connectEvents: "连接事件",
    incomingEvents: "入场活动",
    outgoingEvents: "退出事件",
    errorEvents: "错误事件",
    offer: "提供",
    terminate: "关闭",
    devicesTitle: "设备",
    resetLogin: "重置 Wavoip 登录",
    action: "行动",
    error: "验证或列出消息时出错",
    columns: {
      id: "ID",
      caller: "数字",
      receiver: "目的地",
      direction: "方向",
      duration: "期间",
      createdDate: "日期",
      status: "地位",
      link: "行动"
    },
    columnsDevices: {
      id: "ID",
      idUser: "用户身份",
      name: "姓名",
      phone: "数字",
      token: "代币",
      status: "地位"
    },
    direction: {
      outcoming: "执行",
      incoming: "已收到"
    },
    status: {
      ended: "关闭",
      rejected: "被拒绝"
    },
    resetMessage: "正在重置 Wavoip 登录..."
  },
  error404: {
    title: "404",
    subtitle: "哎呀……这里什么都没有……",
    button: "回去"
  },
  login: {
    welcome: "欢迎！",
    emailPlaceholder: "my＠email.com",
    emailError: "必须是有效的电子邮件。",
    passwordLabel: "密码",
    validateCaptcha: "将滑块拖到末尾以释放您的登录：",
    loginButton: "进入",
    loginLoading: "正在输入...",
    forgotPassword: "我忘记了密码",
    resetPasswordTitle: "恢复密码",
    resetPasswordLabel: "输入您的电子邮件",
    resetPasswordButton: "发送",
    resetPasswordSuccess: "密码恢复电子邮件已发送。",
    resetPasswordError: "发送密码恢复电子邮件时出错。",
    captchaValidationMessage: "CAPTCHA 验证成功！",
    captchaErrorMessage: "请在继续之前验证 CAPTCHA。",
    errorMessage: "正确输入您的用户名和密码。",
    validateEmailError: "请输入有效的电子邮件地址。"
  },
  resetPassword: {
    title: "重置密码",
    newPasswordPlaceholder: "新密码",
    confirmPasswordPlaceholder: "确认密码",
    resetButtonLabel: "重置",
    loadingMessage: "重新定义...",
    successMessage: "密码重置成功！",
    errorMismatch: "密码不匹配。",
    errorMessage: "重置密码错误。"
  },
  signup: {
    title: "创建您的帐户！",
    namePlaceholder: "姓名",
    cpfCnpjPlaceholder: "CPF/CNPJ",
    emailPlaceholder: "电子邮件",
    mobilePhonePlaceholder: "手机",
    passwordPlaceholder: "密码",
    selectPlanPlaceholder: "选择计划",
    submitButtonLabel: "创建账户",
    cancelButtonLabel: "登录",
    loadingMessage: "正在创建...",
    validations: {
      requiredFields: "填写所有字段！",
      invalidCpfCnpj: "无效的 CPF 或 CNPJ。",
      invalidEmail: "电子邮件无效。",
      invalidPassword: "密码必须至少包含 7 个字符，包括字母、数字和一个特殊字符！",
      successMessage: "客户端创建成功。",
      errorMessage: "创建客户端时出错"
    },
    planLabel: "值：R${value} |连接：{连接} |用户：{users}"
  },
  atendimentoChat: {
    selectTicket: "选择一张票！",
    noResults: "没有结果 :(",
    noMore: "无需加载:)",
    forwardMessage: "转发消息",
    forwardHint: "输入至少两个字母来查找联系人。",
    forwardLimit: "仅可选择 1 个联系人。",
    messageSent: "消息发送成功！",
    messageFailed: "无法发送消息。请重试。",
    forwardMessages: "已选择 {count} 条（共 10 条）消息进行转发。",
    contactNotSelected: "选择消息的目标联系人。"
  },
  atendimentoChatdialogAgendamentoMensagem: {
    title: "消息调度",
    close: "关闭"
  },
  atendimentoVcard: {
    contactTitle: "联系人：{name}",
    selectChannelMessage: "选择要启动服务的频道。",
    startButton: "开始",
    attentionTitle: "注意力",
    ongoingTicketMessage: "{name} 有一项正在进行的服务（服务：{ticketId} - 队列：{queueId}）。您要開啟服務嗎？",
    adminOnlyMessage: "{name} 有一项正在进行的服务。只有管理员可以为您分配此服务。",
    ongoingTicketError: "无法刷新令牌",
    notifyTicketStarted: "服务已开始 - {name} - 票证：{ticketId}"
  },
  atendimentoModalSMS: {
    title: "发送短信",
    messageLabel: "短信",
    selectServiceLabel: "选择服务",
    cancel: "取消",
    send: "发送",
    noServiceSelected: "请选择一项服务。",
    comteleSuccess: "Comtele：已发送！",
    conectaSuccess: "ConectaStartup：已发送！",
    livsonSuccess: "Livson：已发送！",
    errorSending: "发送短信时出错：{error}"
  },
  atendimentoModalNovoTicket: {
    title: "创建工单",
    contactPlaceholder: "查找联系人",
    contactHint: "输入至少两个字母来查找联系人。",
    addContact: "添加联系人",
    start: "开始",
    selectDestination: "选择目的地：",
    queueDestination: "目标队列",
    userDestination: "目标用户",
    ticketTransferred: "票已转让。",
    errorLoadingQueues: "加载队列时出现问题",
    errorLoadingUsers: "加载用户时出现问题",
    existingTicketMessage: "{name} 有一项正在进行的服务（服务：{id} - 队列：{queue}）。您要開啟服務嗎？",
    noQueue: "无需排队",
    adminOnlyMessage: "{name} 有一项正在进行的服务。只有管理员可以为您分配此服务。",
    confirmStart: "联系人：{name}。选择要启动服务的频道。",
    contactCreated: "聯絡已建立！"
  },
  atendimentoMixinSockets: {
    tokenInvalid: "令牌无效。重定向到登录页面。",
    privateMessage: {
      update: "收到新的私信。",
      unread: "收到未读私信。",
      notification: "新的私信通知。"
    },
    onlineUsers: "检查在线用户。",
    userOnline: "用户上线。",
    updateStatusUser: "更新用户状态。",
    newClient: "新客户端已连接。",
    pendingCliente: "新客户待定",
    client: "顾客： "
  },
  atendimentomixinCommon: {
    note: "📝注意：",
    transfer: "⏩转账： ",
    audio: "🔊音频： ",
    buttonNotAvailable: "此按钮仅在移动设备上可点击",
    dateFormat: "日/月/年"
  },
  atendimentoMixinAtualizar: {
    label: "评价此服务",
    rating: {
      0: "坏的",
      1: "常规的",
      2: "好的",
      3: "非常好",
      4: "出色的",
      5: "极好的"
    },
    notifications: {
      selecioneUmMotivo: "选择关闭服务的原因。",
      demandaSalva: "需求保存成功！您现在可以结束该服务。",
      erroSalvarDemanda: "无法挽救需求。",
      erroCarregarMotivos: "无法加载原因。",
      forcarDemanda: "关闭服务，明确需求。",
      iniciarAtendimento: "服务已开始 - {name} - 票证：{id}",
      espiarAtendimento: "间谍活动{name} - 票证：{id}",
      avaliacaoEnviada: "评估已发送至支持 {id}。客户发送评价后服务将自动完成。",
      avaliacaoErro: "无法发送服务评价。",
      ticketEncerrado: "服務已閉！ （票号 {id}）",
      mensagemDespedida: "选定的消息正在发送，票证将在 30 秒内关闭！",
      erroAtualizarStatus: "无法更新服务状态。",
      atendimentoJaIniciado: "此连接的服务已在打开/待处理选项卡中启动，或者要求管理员在联系人选项中打开新服务。",
      atendimentoEncerrado: "服務已閉！",
      atendimentoIniciado: "服务已开始！",
      retornadoFila: "回到队伍里！"
    },
    dialogs: {
      iniciar: "服务即将启动，好吗？",
      retornarFila: "返回队列？",
      encerrar: "结束服务？",
      encerrarForcado: "结束服务？票号：{id}",
      mensagemCliente: "您想更新客户 {customer} 的票证 #{ticketId} 吗？",
      mensagemCliente2: "您想结束此服务吗？",
      ticketEncerrar: "结束服务？"
    },
    titles: {
      iniciar: "服务即将启动，好吗？",
      retornarFila: "返回待处理队列？",
      encerrar: "结束服务？",
      encerrarAtendimento: "结束服务？",
      encerrarForcado: "结束服务？票号：{id}"
    },
    evaluation: "已发送评论"
  },
  atendimentoMensagemRespondida: {
    labels: {
      mensagemApagada: "消息已于 {date} 删除。",
      baixarContato: "下载联系方式",
      baixarArquivo: "下载：{filename}",
      visualizarPDF: "看法",
      audioInacessivel: "音频不可用",
      grupoNome: "群组：{GroupName}",
      contatoNome: "联系方式：{contactName}"
    },
    errors: {
      erroMensagem: "处理消息时出错。",
      erroAudio: "加载音频时出错。",
      erroDownload: "下载文件时出错。"
    }
  },
  atendimentoMensagemChat: {
    noName: "没有名字",
    system: "系统",
    labels: {
      atencao: "注意力！！您确实要尝试重新发送此消息吗？",
      processoReenvio: "该过程将尝试重新发送系统中待处理的消息。",
      processoIniciado: "进程已启动。",
      tentandoEnvio: "尝试发送待处理的消息。",
      erroEnvio: "发送消息时出错：{error}",
      deletarAtencao: "注意力！！您确实要删除该消息吗？",
      deletarAviso: "客户端中的旧消息不会被删除。",
      deletarErro: "无法删除消息。",
      mensagemSincronizada: "同步消息：{timingSync}",
      mensagemEditada: "已编辑：{contentMessage}",
      mensagemApagada: "消息已于 {date} 删除。",
      downloadContato: "下载联系方式",
      baixarArquivo: "下载：{filename}",
      mensagemNaoEntregue: "消息未送达",
      mensagemAgendada: "预定消息",
      enviadoCancelado: "提交已取消：{date}",
      criadoEm: "创建日期：{date}",
      programadoPara: "预定日期：{date}",
      facaDownload: "下载文件",
      editarMensagem: "编辑消息"
    },
    errors: {
      erroAudio: "加载音频时出错。",
      erroMensagem: "处理消息时出错。",
      erroDownload: "下载文件时出错。",
      maximoMensagens: "最多允许 10 条消息。"
    },
    dialogs: {
      reenviarTitulo: "重新发送消息",
      reenviarMensagem: "您想重新发送此待处理消息吗？",
      deletarTitulo: "删除消息",
      deletarMensagem: "您确实要删除此消息吗？客户端中的旧消息不会被删除。"
    }
  },
  atendimentoItemTicketPainel: {
    labels: {
      atender: "满足",
      espirar: "间谍",
      usuario: "用户：{用户名}",
      canalRemovido: "频道已移除",
      atendimentoResolvido: "服务已解决",
      chatbotAtendendo: "聊天机器人服务",
      integracaoExterna: "外部整合",
      fila: "队列：{queuename}",
      etiquetas: "标签：{tags}",
      carteiras: "钱包：{钱包}",
      espiarAtendimento: "查看服务：{idTicket}"
    },
    status: {
      aberto: "打开",
      pendente: "待办的",
      resolvido: "已解决"
    },
    errors: {
      erroInformacoes: "检索 {typeInformation} 时出错：{error}"
    }
  },
  atendimentoItemTicket: {
    labels: {
      atender: "满足",
      atendimentoResolvido: "服务已解决",
      chatbotAtendendo: "聊天机器人服务",
      integracaoExterna: "外部整合",
      forcarFechamento: "强制关闭（无告别/评估/要求）",
      espiarAtendimento: "间谍服务：{id}",
      usuario: "用户：{用户名}",
      etiquetas: "标签：",
      kanban: "看板：{kanbanName}",
      semFoto: "频道已移除",
      espiar: "间谍",
      fecharTicketSemDespedida: "强制关闭（无告别/评估/要求）"
    },
    status: {
      aberto: "打开",
      pendente: "待办的",
      resolvido: "已解决"
    },
    errors: {
      erroInformacoes: "从 {typeInformation} 检索信息时出错：{error}",
      erroRemoverFoto: "删除空照片时出错： "
    },
    dialogs: {
      fecharTitulo: "注意力",
      fecharMensagem: "您想强制关闭该票吗？"
    }
  },
  inputMensagem: {
    novo: {
      camposObrigatorios: "请填写所有必填字段",
      enviarLocalizacao: "发送位置",
      latitude: "纬度",
      longitude: "经度",
      nomeLocal: "地点名称",
      enderecoLocal: "地点地址",
      localizacaoEnviada: "位置发送成功！",
      erroEnviarLocalizacao: "发送位置时出错",
      enviarCTAURL: "发送CTA链接",
      enviarReplyButtons: "发送回复按钮",
      enviarAddress: "发送地址",
      enviarLocationRequest: "发送位置请求",
      enviarFlow: "发送流程",
      enviarLocation: "发送位置",
      sendLocation: "发送位置",
      tipoDeHeader: "标题类型",
      texto: "文本",
      imagem: "图片",
      video: "视频",
      documento: "文档",
      textoDoHeader: "标题文本",
      urlDoHeader: "标题URL",
      mensagem: "消息",
      digiteSuaMensagem: "请输入您的消息",
      textoDoBotao: "按钮文本",
      exemploTextoDoBotao: "例: 查看产品",
      urlDoBotao: "按钮链接",
      exemploUrlDoBotao: "https://exemplo.com",
      footeropt: "页脚 (可选)",
      textoDoFooter: "页脚文本",
      flowIdopt: "流程ID (可选)",
      idDoFlow: "流程ID",
      flowNameopt: "流程名称 (可选)",
      nomeDoFlow: "流程名称",
      flowCtaopt: "流程CTA *",
      textoDoCta: "CTA文本",
      flowTokenopt: "流程令牌 (可选)",
      tokenDoFlow: "流程令牌",
      flowAction: "流程操作",
      navegar: "导航",
      trocaDeDados: "数据交换",
      flowActionPayloadopt: "流程操作载荷 (可选)",
      tituloDoBotao: "按钮标题",
      rua1opt: "街道 1 *",
      enderecoPrincipal: "主要地址",
      rua2opt: "街道 2 (可选)",
      complemento: "补充",
      cidadeopt: "城市 *",
      nomeDaCidade: "城市名称",
      estadoopt: "州/省 *",
      nomeDoEstado: "州/省名称",
      cepopt: "邮政编码 *",
      cep: "00000-000",
      paisopt: "国家 *",
      nomeDoPais: "国家名称",
      tipoDeEndereco: "地址类型",
      casa: "住宅",
      trabalho: "工作",
      latitudeopt: "纬度 *",
      longitudeopt: "经度 *",
      nomeDaLocalizacaoopt: "位置名称 (可选)",
      exemploNomeDaLocalizacao: "例: 购物中心",
      enderecoopt: "地址 (可选)",
      enderecoCompleto: "完整地址",
      enderecoEnviado: "地址发送成功！",
      localizacaoEnviada: "位置发送成功！"
    },    
    labels: {
      campoVazio: "在发送模板之前，请填写所有变量字段。",
      vcardEnviado: "VCard发送成功！",
      telefoneContato: "电话",
      nomeContato: "姓名",
      enviarContato: "发送联系人",
      nothingHere: "注意...这里什么都没有！",
      nothingHereDescription: "没有可显示的快速消息或附件。",
      erroAnexar: "附加文件时出错",
      anexoEnviado: "附件发送成功！",
      selecioneArquivo: "选择一个文件",
      preview: "预览",
      anexarArquivo: "附加文件",
      caption: "标题",
      emoji: "表情符号",
      templates: "模板",
      digiteMensagem: "在此处输入...",
      enviarArquivo: "发送多个文件",
      enviarArquivoCaption: "发送带标题的文件",
      enviarFigurinha: "发送贴纸",
      enviarEmoji: "表情符号",
      enviarMensagem: "发送消息",
      enviarAudio: "发送音频",
      enviarLinkVideo: "发送视频会议链接",
      enviarMarcacaoFantasma: "发送幽灵标记",
      enviarMarcacao: "发送预约",
      enviarBotoes: "发送按钮",
      enviarListas: "发送列表",
      enviarTemplate: "模板",
      removerMidiaMensagemRapida: "从快速消息中删除媒体",
      cancelarGravacao: "取消录制",
      enviarGravacao: "发送录音",
      gravacaoIniciada: "录制已开始",
      gravacaoParada: "录制已停止",
      mensagemRapida: "快速消息",
      mensagemMarcacao: "标记消息",
      mensagemMarcacaoFantasma: "幽灵标记消息",
      videoGravacao: "视频录制",
      arquivo: "文件： ",
      voz: "嗓音： ",
      semMidia: "无媒体",
      sim: "是的",
      nao: "不",
      dataHoraAgenda: "预约日期/时间",
      desativarAssinatura: "取消订阅",
      ativarAssinatura: "激活订阅",
      selecioneParticipantes: "选择参与者",
      botao: "按钮",
      botao1: "按钮 1",
      botao2: "按钮 2",
      botao3: "按钮 3",
      header: "标题",
      title: "标题",
      footer: "踢脚板",
      title1: "第 1 列标题",
      title2: "第 2 列标题",
      title3: "第 3 列标题",
      title4: "第 4 列标题",
      title5: "第 5 列标题",
      description1: "描述列 1",
      description2: "描述列 2",
      description3: "描述列 3",
      description4: "描述列 4",
      description5: "描述列 5",
      templateChoose: "选择模板",
      startRecord: "开始录制",
      stopRecord: "停止录制",
      sendRecord: "发送录音"
    },
    dialogs: {
      confirmarEnvio: "确认发送：输入",
      cancelarEnvio: "取消：ESC"
    },
    errors: {
      arquivoRejeitado: "由于大小或类型不兼容，文件被拒绝。",
      gravacaoErro: "录制视频或音频时出错。"
    },
    error: {
      vcardErro: "发送VCard时出错！",
      erroEnviarVcard: "发送VCard时出错！",
    },
    success: {
      vcardEnviado: "VCard发送成功！",
    }      
  },
  atendimentoInputScript: {
    pendingMessageSended: "请稍候...消息正在发送",
    micPermissionDenied: "麦克风权限被拒绝",
    scheduleError: "要安排消息，请输入安排日期/时间字段。",
    sendMessage: "发送消息",
    scheduleMessage: "安排消息",
    recordAudio: "录制音频",
    stopRecording: "停止录制",
    cancelRecording: "取消录音",
    startRecording: "开始录制",
    prepareMedia: "准备运输介质",
    invalidFile: "无效文件！",
    fileAcceptedFormats: "接受的格式：{formats}",
    sendingMessage: "正在发送消息...",
    errorSendingMessage: "发送消息错误",
    invalidMessage: "无效消息",
    customSchedule: "自定义调度",
    in30Minutes: "30分钟内",
    tomorrow: "明天",
    nextWeeks: "下周",
    uploadFile: "发送文件",
    attachFile: "附加文件",
    previewImage: "查看图片",
    dragFileHere: "将文件拖到此处",
    selectAll: "选择全部",
    schedulePlaceholder: "输入预约日期/时间字段",
    videoRecordingError: "开始录制视频时出错",
    audioRecordingError: "开始录音时出错",
    filePreviewError: "加载文件预览时出错",
    messageScheduled: "消息安排成功",
    messageError: "处理消息时出错",
    headerUrl: "标头 URL",
    namedVariable: "变量值",
    templateSuccess: "模板发送成功",
    templateError: "发送模板时出错",
    ghostMessageSuccess: "幽灵标签消息发送成功",
    ghostMessageError: "发送幽灵标签消息时出错",
    mentionAllSuccess: "预订信息发送成功",
    mentionAllError: "发送标签消息时出错",
    previewTitle: "将图片发送至 {contactName}",
    noFilesToSend: "没有要上传的文件",
    emptyMessageError: "不存在的消息",
    multipleQuickMessagesError: "发现多条快速消息。从消息中选择一个或输入一个唯一密钥",
    noQuickMessageFoundError: "/ 表示您想发送一条快速消息，但未找到任何消息。注册或删除 / 并输入您的消息。",
    dataMessage: "请输入将要发送的数据",
    messageValidationError: "消息长度必须介于 1 到 60 个字符之间。",
    buttonValidationError: "按钮最多可包含 20 个字符。",
    duplicateButtonError: "按钮不能有重复的值。",
    missingFieldsError: "请输入将要发送的数据。"
  },
  atendimentoInfoCabecalho: {
    pauseAttendance: "暂停服务",
    resumeAttendance: "恢复服务",
    attendancePaused: "服务已成功暂停",
    attendanceResumed: "服务已成功恢复",
    pauseError: "控制服务暂停时出错",
    menuAction: "菜单操作",
    contactInfo: "联系信息",
    assignedTo: "归因于：",
    ticketNumber: "票号：",
    reopenTicket: "重新打开票",
    messageScheduling: "消息调度",
    returnToQueue: "返回排队",
    resolveTicket: "解决",
    transfer: "转移",
    chatbot: "聊天机器人",
    channel: "渠道",
    channels: "频道",
    resolve: "解决",
    reopenCall: "重新打开 Wavoip 通话",
    scheduleMessage: "安排消息",
    actions: "行动",
    selectDestination: "选择目的地：",
    ticket: "票",
    destinationQueue: "目标队列",
    destinationUser: "目标用户",
    destinationChatbot: "目标聊天机器人",
    destinationChannel: "目标渠道",
    alreadyAssigned: "票证已属于选定的用户。",
    alreadyAssignedToYou: "票证已属于其用户。",
    alreadyInQueueAndUser: "票证已经属于该队列和用户。",
    transferredToChatbot: "票已转移至聊天机器人",
    transferredToChannel: "票已转移到频道",
    transferredToQueue: "票已转让。",
    loadingQueuesError: "加载队列时出现问题",
    loadingUsersError: "加载用户时出现问题",
    loadingChatbotsError: "聊天机器人加载问题",
    loadingChannelsError: "加载频道时出现问题",
    ticketOpen: "打开",
    ticketClosed: "关闭",
    transferError: "无法转移",
    checkTicketError: "此联系人已有一张打开/待处理的票证。"
  },
  generalSupport: {
    selectWavoip: "请选择用于拨打电话的 WhatsApp",
    looginForWarning1: "搜索期间票证未更新！",
    looginForWarning2: "清除字段以更新...",
    lookingFor: "按 ID、名称或号码搜索...",
    closingForecast: "收盘预测",
    status: "地位",
    createdAt: "创建于",
    opportunities: "日志",
    funil: "漏斗",
    ticketFunil: "在漏斗中创建步骤",
    privateChat: "私人的",
    groupChat: "团体",
    searchMessage: "搜索消息",
    searchTicket: "寻求帮助",
    notes: "笔记",
    number: "数字",
    message: "信息",
    placeholderNumber: "+直拨 (DDD) 99999 9999",
    hintNumber: "如果系统中存在活动的 WABA 连接，则必须输入准确的 WhatsApp 帐号。",
    ticketNotes: "服务说明",
    evaluation: "评估",
    ticketEvaluation: "服务评估",
    markasNoRead: "标记为未读",
    markasRead: "标记为已读",
    businessName: "公司名称",
    lastName: "姓",
    firstName: "名",
    profile: "轮廓",
    logout: "外出",
    activate: "激活",
    deactivate: "禁用",
    toggleDarkMode: "黑暗模式",
    viewTickets: "查看门票",
    returnMenu: "返回菜单",
    taskCreate: "创建任务",
    inernalChat: "内部聊天",
    privateChats: "私人对话",
    groupChats: "群聊",
    advancedFilter: "高级筛选",
    filterByQueues: "队列",
    filterByConnections: "连接（测试版）",
    filterByUser: "用户（测试版）",
    filterByTags: "标签（测试版）",
    filterByKanban: "看板（测试版）",
    openTickets: "打开",
    pendingTickets: "待办的",
    resolvedTickets: "已解决",
    unreadTicketsOnly: "仅限未读消息的票证",
    advancedFilterNotice: "使用过滤器时，您必须单击上面的按钮“加载更多服务”。",
    scheduleMessages: "预定消息",
    scheduledFor: "预定于：",
    extractConversations: "提取对话",
    downloadPDF: "下载 PDF 文件",
    difyDescription: "激活时，系统将消耗 Dify",
    lmDescription: "激活后，系统将消耗 LM Studio",
    grokDescription: "激活后，系统将消耗 Grok",
    geminiDescription: "激活后，系统将消耗 Gemini",
    deepseekDescription: "激活后，系统将消耗 Deepseek",
    qwenDescription: "激活时，系统将消耗Qwen",
    claudeDescription: "激活后，系统将消耗克劳德",
    ollamaDescription: "激活后，系统将消耗Ollama",
    clearKanban: "清晰的看板",
    reason: "要求",
    clearReason: "明确需求",
    value: "价值",
    blockContact: "阻止联系",
    blockChatbot: "阻止聊天机器人",
    tags: "标签",
    kanban: "看板",
    chatgptDescription: "激活后，系统将消耗 ChatGPT",
    dialogflowDescription: "激活后，系统将使用 DialogFlow",
    typebotDescription: "激活后，系统将消耗 Typebot",
    n8nescription: "激活后，系统将消耗 N8N",
    private: "私人的",
    groups: "团体",
    chatbot: "聊天机器人",
    n8nDescription: "激活后，系统将消耗 N8N",
    contacts: "联系方式",
    openWavoip: "打开 Wavoip",
    startNew: "开始单次对话",
    loadMore: "加载更多通话",
    reverseOrder: "反向机票订单",
    protocol: "协议",
    ticketProtocol: "服务协议",
    syncHistory: "同步历史记录",
    log: "日志",
    noTagsAvailable: "哎呀...没有创建标签！",
    noTagsAvailableWarning: "在系统管理中注册新的标签。",
    noWalletsAvailable: "哎呀...没有可用的钱包！",
    wallets: "钱包",
    filter: {
      queues: "队列",
      whatsapp: "联系",
      users: "用户",
      tags: "标签",
      kanbans: "看板"
    },
    toggleFilterOptions: "显示/隐藏过滤器选项",
    addTag: "添加标签",
    addWallet: "添加钱包",
    markAsRead: "标记为已读",
    markAsUnread: "标记为未读",
    sanitizeContact: "消毒接触",
    logsticket: "工单日志",
    contactSanitizeNotice: "此例程重新创建用户并关闭与该联系人相关的所有票证。",
    addValue: "增加价值",
    ticketProtocols: "服务协议",
    ticketsEvaluations: "服务评价",
    evaluationAverage: "平均评分",
    evaluationNotConclusive: "评估未成功完成",
    contactDetails: {
      vapi: "Vapi",
      title: "联系方式",
      reduceMenu: "折叠菜单",
      name: "姓名",
      phone: "电话",
      email: "电子邮件",
      cpf: "中央公积金",
      birthday: "生日日期",
      businessName: "企业",
      firstName: "名",
      lastName: "姓",
      edit: "编辑",
      call: "Wavoip",
      asterisk: "啜饮",
      telephony: "电话",
      sms: "短信"
    },
    logs: {
      contactLogs: "联系日志",
      ticketLogs: "工单日志",
      evaluationLogs: "评估日志",
      protocolLogs: "协议日志",
      noteLogs: "笔记日志"
    }
  },
  rating: {
    poor: "坏的",
    fair: "常规的",
    good: "好的",
    veryGood: "非常好",
    excellent: "出色的",
    incredible: "极好的"
  },
  generalSupportScript: {
    sendMessage: "发送消息",
    sendingMessage: "正在发送消息...",
    messageSent: "消息已发送至号码： ",
    messageSendError: "发送单个消息时出错： ",
    closeModal: "关闭模式",
    error: "错误",
    success: "成功",
    notificationPosition: "顶部",
    notificationColorPositive: "积极的",
    notificationColorNegative: "消极的",
    downloadPDF: "下载 PDF",
    downloadingPDF: "正在下载 PDF...",
    errorDownloadingPDF: "下载消息时出错",
    reportTitle: "消息报告 - 支持",
    protocolLabel: "协议",
    ticketIdLabel: "票证 ID",
    whatsappIdLabel: "WhatsApp ID",
    channelLabel: "渠道",
    footerGeneratedOn: "生成日期",
    contactInfo: "联系信息",
    nameLabel: "姓名",
    numberLabel: "数字",
    profilePicLabel: "个人资料照片",
    messageFrom: "消息来自",
    dateTimeLabel: "日期/时间",
    userIdLabel: "用户身份",
    messageBody: "消息正文",
    separatorLine: "分隔线",
    saveFileName: "服务_",
    termsAcceptanceNotification: "要求超级管理员接受贵公司的使用条款。",
    tenantWithFalseAcceptTermsNotification: "要求超级管理员接受租户的使用条款",
    acceptTermsSuccess: "已成功接受域名条款",
    errorAcceptingTerms: "接受条款时出错",
    notifyActionClose: "关闭",
    tenantId: "租户 ID",
    superadminProfile: "超级管理员",
    tenantNotFound: "未找到租户",
    deleteNoteConfirmation: "您确实要删除注释“${note.notes}”吗？",
    deleteNoteSuccess: "注释${note.notes}已删除！",
    attentionTitle: "注意力",
    noLabel: "不",
    yesLabel: "是的",
    autoCloseWarning: "在超过 ${time} 分钟没有互动后，支持 ${ticket.id} 已自动解决。",
    autoCloseEnabled: "自动应答已激活",
    autoCloseDisabled: "自动应答已禁用",
    noInteraction: "无互动",
    timeExceeded: "超出时间",
    ticketsLoaded: "已加载服务！",
    ticketsLoadedTabs: "服务已加载到打开、待处理和关闭的选项卡中！",
    attention: "注意力",
    syncOldMessagesWarning: "您确实要同步消息历史记录吗？",
    syncOldMessagesHint: "仅允许正数",
    syncOldMessagesSuccess: "请稍等片刻，系统将为用户${ticketFocado.contact.number}导入${value}条消息",
    invalidValue: "用户输入的值无效或未提供。",
    sendProtocolConfirmation: "您想为该服务发送协议吗？",
    protocolSent: "协议${protocol}已发送至支持${ticketFocado.id}",
    protocolError: "无法发送服务协议。",
    limitMessagesLabel: "导入消息的限制",
    loading: "加载中...",
    ratingMessageTitle: "评价此服务：",
    notificationMessageFrom: "来自 的消息",
    loadMoreTicketsMessage: "当您到达票证列表的末尾时，新请求将被加载到所有选项卡中（如果有）。此操作每3秒重复一次！",
    companyInactive: "您的公司未开展业务！",
    contactAdmin: "请联系您的系统管理员！",
    logoutError: "无法退出",
    tenantInactiveMessage: "该公司处于非活跃状态，很快就会被断开。",
    sessionExpired: "会话已过期，您将被重定向至登录。",
    deleteMessageConfirmation: "您确实要删除该消息吗？",
    deleteMessageWarning: "客户端中的旧消息不会被删除。",
    deleteError: "无法删除消息",
    loadUsersError: "加载用户时出现问题",
    loadUserError: "加载用户时出现问题",
    loadError: "尝试保存数据时发生错误： ",
    contactSanitizeSuccess: "联系人已成功消毒...",
    contactSanitizeError: "消毒接触器时出错...",
    loadMessage: "正在加载门票，请等待...",
    confirmExitTitle: "您确定要离开此页面吗？",
    confirmExitMessage: "当您离开此页面时，将失去对连接的控制。"
  },
  dashTickets: {
    noQueue: "无需排队",
    consultTicketsError: "咨询服务时出错",
    open: "打开",
    tickets: "服务",
    panelTitle: "服务面板",
    filtersButtonLabel: "过滤器",
    closeOpenTicketsButtonLabel: "关闭未完成的预约",
    closePendingTicketsButtonLabel: "关闭待处理呼叫",
    transferTicketButtonLabel: "用户之间的转账服务",
    markAllAsReadButtonLabel: "将所有消息标记为已读",
    filtersTitle: "过滤器",
    dateStartLabel: "开始",
    dateEndLabel: "结尾",
    showAllLabel: "（管理员）- 查看全部",
    viewTypeLabel: "视图类型",
    updateButtonLabel: "更新",
    visionButtonLabel: "想象",
    selectDestinationQueueLabel: "目标队列",
    selectUserLabel: "目标用户",
    transferWithoutQueueLabel: "无需排队即可转移所有预约",
    transferBetweenUsersLabel: "用户之间的转账服务",
    resolvePendingTicketsLabel: "解决所有待处理的请求",
    resolveOpenTicketsLabel: "解决所有未决问题",
    selectSourceUserLabel: "源用户",
    attentionMessage: "注意，用户必须具有访问相同队列的权限",
    actionInMassMessage: "请注意，这是一项大规模行动，无法逆转。",
    transferTicketsConfirmation: "无需排队即可转移所有预约",
    closeTicketsConfirmation: "解决所有待处理的请求",
    closeOpenTicketsConfirmation: "解决所有未决问题",
    userSelectionError: "选择待处理服务的用户和目标队列！",
    userDestinationSelectionError: "选择目标用户！",
    massActionError: "执行转移时出现问题",
    markAllAsReadMessage: "消息被标记为已读。",
    massCloseTicketsError: "关闭大众服务的问题",
    updateTicketError: "更新票证时出现问题",
    ticketsReloadMessage: "请等待，操作完成后页面将重新加载。",
    loadQueuesError: "加载队列时出现问题",
    loadUsersError: "加载用户时出现问题",
    selectUserAndQueueError: "选择待处理服务的用户和目标队列！",
    transferError: "执行转移时出现问题",
    closeMassTicketsError: "关闭大众服务的问题",
    resolveTicketsBatchMessage: "票证以 10 项为单位进行解决。",
    reloadPageMessage: "请等待，操作完成后页面将重新加载。",
    markAllAsReadError: "将所有标记为已读时出现问题",
    viewTypeUser: "用户",
    viewTypeUserSynthetic: "合成用户",
    viewTypeQueue: "队列",
    viewTypeQueueSynthetic: "合成线"
  },
  dashBoard: {
    dataValidation: "请注意，无法在同一天检查该期间的开始和结束时间。",
    attendanceValueEvolution: "价值观的演变",
    values: "价值观",
    attendances: "服务",
    filterGroups: "过滤器组",
    filterPrivateChats: "过滤私人对话的统计数据！",
    controlPanel: "控制面板",
    attendanceByChannelName: "按渠道提供服务（名称）",
    undefined: "不定",
    attendanceByChannel: "按渠道提供服务（连接）",
    attendanceByQueue: "队列服务",
    attendanceByReasons: "按需服务",
    attendanceByStatus: "按状态服务",
    attendanceByUser: "用户服务",
    evolutionByChannel: "按渠道演变",
    evolutionByValue: "价值进化",
    attendanceEvolution: "服务的演变",
    user: "用户",
    pending: "待办的",
    attending: "参加",
    resolved: "完全的",
    total: "全部的",
    avgRating: "平均评分",
    avgFirstResponse: "首次响应平均时间",
    avgHandlingTime: "平均服务时间（AST）",
    hours: "小时",
    minutes: "分钟",
    scheduleStartDate: "预约日期/时间",
    scheduleEndDate: "预约日期/时间",
    generate: "生成",
    noDataHere: "这里没有数据！",
    totalTickets: "总出席人数",
    activeTickets: "积极的",
    receptiveTickets: "接受",
    newContacts: "新联系人",
    avgResponseTime: "首次响应平均时间",
    performanceByTeam: "团队绩效",
    ticketsByChannel: "按渠道服务",
    ticketsByQueue: "队列服务",
    ticketsByStatus: "按状态服务",
    ticketsByUser: "用户服务",
    ticketsEvolutionChannels: "按渠道演变",
    ticketsEvolutionByPeriod: "服务的演变",
    notInformed: "未获悉",
    evolutionByPeriod: "服务"
  },
  confirmation: {
    irreversibleAction: "注意：此操作不可逆！",
    deleteTenant: "您确实要删除公司 {id} 吗？"
  },
  socketInitial: {
    updateWhatsapps: "已收到 WhatsApp 更新",
    deleteWhatsapps: "WhatsApp 已删除",
    updateSession: "会话已更新",
    loadingScreen: "连接正在同步： ",
    readySession: "連線已更新。",
    wavoipSession: "与 Wavoip 同步连接： ",
    updateImport: "将设备与应用程序同步。",
    refreshImport: "更新设备消息。",
    changeBattery: "WhatsApp 手机电池需要充电。",
    ticketUpdate: "票已更新。",
    ticketCreate: "已创建新票证。",
    chatCreate: "已创建新聊天。",
    ticketNotification: "新客户待定。",
    messageAck: "消息已确认。",
    messageDelete: "消息已删除。",
    messageUpdate: "消息已更新。",
    contactUpdate: "聯絡人已更新。",
    privateMsgReceived: "收到新的私信。",
    unreadPrivateMsgReceived: "收到未读私信。",
    notificationPrivateMsgReceived: "私信通知已收到。",
    userVerified: "已验证用户。",
    userChatUpdate: "用户状态已更新。",
    userStatusUpdate: "用户状态已更新"
  },
  mainLayout: {
    novo:{
      wabaTemplate: 'Para WABA será criado um novo ticket para envio de templates',
      userNotFound: 'Erro: Usuário não encontrado. Faça login novamente.',
      whatsappNotFound: 'Erro: WhatsApp não selecionado.',
      numberNotFound: 'Erro: Número não informado.',
      numberInvalid: 'Erro: Número inválido.',
      invalidIds: 'IDs inválidos para verificação de tickets',
      invalidData: 'Erro: Dados inválidos para criar ticket.',
      ticketCreated: 'Novo ticket criado para {contatoName} - Ticket: {ticketId}',
      ticketCreatedError: 'Erro: Ticket criado mas sem ID válido.',
    },
    noTutorials: '没有教程',
    tutoriais: '教程',
    checkAllInternalMessages: "全部标记为已读（私人聊天）",
    checkAllInternalMessagesSuccess: "所有消息均已标记为已读（私人聊天）",
    checkAllInternalMessagesError: "将所有消息标记为已读时出错（私人聊天）",
    checkAllMessages: "全部标记为已读（服务）",
    checkAllMessagesSuccess: "所有消息均已标记为已读（出席）",
    checkAllMessagesError: "将所有消息标记为已读时出错（服务）",
    webphone: "SIP 网络电话",
    cookieWarning: "清除缓存和 cookie。单击“确定”重新加载页面！",
    cleanCookies: "重启",
    task: "任务",
    dashboard: "控制板",
    atendimentos: "服务",
    contatos: "联系方式",
    disparoMassa: "大规模枪击事件",
    grupos: "团体",
    chat: "聊天",
    kanban: "看板",
    tarefas: "任务",
    perfil: "轮廓",
    logout: "外出",
    close: "关闭",
    send: "发送",
    cancel: "取消",
    startConversation: "开始单次对话",
    internalMessages: "内部消息",
    tasks: "任务",
    taskLimit: "限制",
    taskStatus: "地位",
    taskPriority: "优先事项",
    taskDate: "最后期限",
    message: "信息",
    number: "数字",
    whatsappId: "WhatsApp ID",
    taskName: "任务",
    taskPriorityMap: {
      high: "高的",
      medium: "平均的",
      low: "低的",
      none: "没有任何"
    },
    taskStatusMap: {
      delayed: "晚的",
      pending: "待办的",
      finished: "完全的"
    },
    user: "用户",
    hello: "你好",
    userOnline: "在线用户",
    userOffline: "离线用户",
    newChat: "开始单次对话",
    reopenCall: "重新打开 Wavoip 通话",
    internalMessage: "内部消息",
    menu: "菜单",
    notifications: "通知",
    noNewNotifications: "这里没什么新鲜事！",
    newMessagesInInternalChat: "内部聊天中有新的未读消息！",
    unreadMessagesInInternalChat: "内部聊天中有未读消息！",
    sharedTicketInvites: "共享工单邀请",
    pendingClientsInQueue: "排队等候的客户",
    contact: "接触",
    yes: "是的",
    no: "不",
    attention: "注意力！",
    userProfile: "用户配置文件",
    updateUser: "更新用户",
    acceptTerms: "接受条款",
    error: "错误",
    successfullySent: "消息发送成功",
    acceptTermsMessage: "请接受使用条款以继续。",
    invalidTenant: "无效承租人。要求超级管理员验证电子邮件。",
    profile: "轮廓"
  },
  scriptMainLayout: {
    groupTabAccess: "访问支持中的“组”选项卡以打开呼叫。",
    tokenUpdateError: "无法刷新令牌。",
    noQueue: "无需排队",
    attention: "注意力！！",
    logoutError: "无法注销。",
    messagesLoadError: "加载内部消息时出错。",
    tasksLoadError: "加载任务时出错。",
    markAsReadError: "将消息标记为已读时出错。",
    deleteMessageError: "删除消息时出错。",
    fetchMessagesError: "获取未读消息时出错。",
    contactHasOngoingTicket: "{contact} 有一项持续的服务。",
    adminCanAssign: "只有管理员可以为您分配此服务。",
    openTicketConfirmation: "{contact} 有一项正在进行的服务（服务：{ticketId} - 队列：{queueId}）。您要開啟服務嗎？",
    callNotification: "新来电",
    messageSent: "消息已发送至号码：{number}",
    messageSendError: "发送单个消息时出错：{error}",
    internalMessagesNotification: "您有 {count} 条未读消息。",
    tasksNotification: "您有 {count} 个待处理任务。",
    acceptTermsSuccess: "条款已成功接受。",
    acceptTermsError: "要求超级管理员接受贵公司的使用条款。",
    adminContact: "请联系您的系统管理员！",
    betaMenuAccess: "测试版菜单仅供授权用户使用。",
    taskStatus: {
      delayed: "🚩 迟到",
      pending: "🔄 待定",
      finished: "✅ 已完成"
    },
    priorityStatus: {
      high: "⚡⚡⚡ 高",
      medium: "⚡⚡ 平均",
      low: "⚡ 下载",
      none: "😉 无"
    },
    notifications: {
      chatUpdate: "在聊天中更新。",
      newMessage: "来自 {contact} 的新消息。",
      messageFrom: "来自 {contactName} 的消息",
      notificationBody: "{messageBody} - {时间}"
    }
  },
  menu: {
    funil: {
      title: "漏斗",
      caption: "机会管理"
    },
    dashboard: {
      title: "控制板",
      caption: ""
    },
    atendimentos: {
      title: "服务",
      caption: "服务列表"
    },
    contatos: {
      title: "联系方式",
      caption: "联系人列表"
    },
    disparoMassa: {
      title: "大规模枪击事件",
      caption: "发送批量消息"
    },
    grupos: {
      title: "团体",
      caption: "批量群组管理"
    },
    chat: {
      title: "聊天",
      caption: "聊天"
    },
    kanban: {
      title: "看板",
      caption: "客户关系管理"
    },
    tarefas: {
      title: "任务",
      caption: "待办事项列表"
    }
  },
  menuSupervisor: {
    canais: {
      title: "频道",
      caption: "沟通渠道"
    },
    relatorios: {
      title: "报告",
      caption: "一般报告"
    },
    filas: {
      title: "队列",
      caption: "队列注册"
    },
    equipes: {
      title: "团队",
      caption: "团队"
    },
    mensagensRapidas: {
      title: "快速消息",
      caption: "预定义消息"
    },
    chatbot: {
      title: "聊天机器人",
      caption: "服务机器人"
    },
    agendamentos: {
      title: "预约",
      caption: "预定消息"
    },
    aniversarios: {
      title: "生日",
      caption: "预定消息"
    },
    fechamento: {
      title: "结束语",
      caption: "结束语"
    },
    etiquetas: {
      title: "标签",
      caption: "标签注册"
    },
    notas: {
      title: "笔记",
      caption: "服务说明"
    },
    protocolos: {
      title: "协议",
      caption: "服务协议"
    },
    avaliacoes: {
      title: "评论",
      caption: "服务评价"
    },
    horarioAtendimento: {
      title: "营业时间",
      caption: "营业时间"
    },
    campanhas: {
      title: "活动",
      caption: "发送活动"
    }
  },
  callLogs: {
    downloadReport: "下载日志",
    title: "SIP通话日志",
    subtitle: "SIP呼出和呼入的通话记录",
    columns: {
      id: "ID",
      originNumber: "主叫号码",
      destinationNumber: "被叫号码",
      callStatus: "通话状态",
      callDuration: "时长",
      createdAt: "创建日期",
      user: "用户"
    },
    status: {
      calling: "呼叫中",
      received: "已接听",
      accepted: "已接受",
      completed: "已完成",
      ended: "已结束"
    }
  },    
  menuAdmin: {
    logligacao: {
      title: "通话记录",
      caption: "SIP通话日志"
    },      
    canais: {
      title: "频道",
      caption: "沟通渠道"
    },
    painelAtendimentos: {
      title: "服务面板",
      caption: "服务概览"
    },
    relatorios: {
      title: "报告",
      caption: "一般报告"
    },
    usuarios: {
      title: "用户",
      caption: "用户管理员"
    },
    filas: {
      title: "队列",
      caption: "队列注册"
    },
    equipes: {
      title: "团队",
      caption: "团队聊天"
    },
    mensagensRapidas: {
      title: "快速消息",
      caption: "预定义消息"
    },
    chatbot: {
      title: "聊天机器人",
      caption: "服务机器人"
    },
    agendamentos: {
      title: "预约",
      caption: "预定消息"
    },
    aniversarios: {
      title: "生日",
      caption: "预定消息"
    },
    fechamento: {
      title: "结束语",
      caption: "结束语"
    },
    etiquetas: {
      title: "标签",
      caption: "标签注册"
    },
    notas: {
      title: "笔记",
      caption: "服务说明"
    },
    wavoip: {
      title: "Wavoip",
      caption: "来电和去电"
    },
    protocolos: {
      title: "协议",
      caption: "服务协议"
    },
    avaliacoes: {
      title: "评论",
      caption: "服务评价"
    },
    horarioAtendimento: {
      title: "营业时间",
      caption: "营业时间"
    },
    campanhas: {
      title: "活动",
      caption: "发送活动"
    },
    api: {
      title: "API",
      caption: "外部系统集成"
    },
    configuracoes: {
      title: "设置",
      caption: "常规设置"
    }
  },
  menuSuperAdmin: {
    backup: {
      title: '导出',
      caption: '数据中心'
    },
    monitor: {
      title: "监视器",
      caption: "系统监控"
    },
    assinatura: {
      title: "签名",
      caption: "管理许可证"
    },
    tenants: {
      title: "租户",
      caption: "租户"
    },
    usuarios: {
      title: "用户",
      caption: "用户管理员"
    },
    email: {
      title: "电子邮件",
      caption: "密码恢复"
    },
    planos: {
      title: "计划",
      caption: "注册计划"
    },
    pagamentos: {
      title: "付款",
      caption: "付款详情"
    },
    canais: {
      title: "频道",
      caption: "沟通渠道"
    },
    api: {
      title: "API",
      caption: "超级管理员 API"
    },
    atualizar: {
      title: "更新",
      caption: "系统维护"
    },
    customizar: {
      title: "定制",
      caption: "标志和颜色"
    },
    notificacao: {
      title: "通知",
      caption: "内部消息"
    },
    filasTarefas: {
      title: "队列和任务",
      caption: "Bull 和 Redis"
    },
    dadosInternos: {
      title: "内部数据",
      caption: "内部消息"
    },
    terminal: {
      title: "终端",
      caption: "SSH 终端"
    }
  },
  menuBloqueio: {
    configuracoes: {
      title: "设置",
      caption: "常规设置"
    }
  },
  grupoIndex: {
    tabs: {
      bulkgroups: "团体和参与者",
      bulkgroups2: "操控群组",
      bulkuser: "操纵用户",
      banlist: "禁用号码",
      wordlist: "禁忌词汇",
      greetings: "问候语",
      farewell: "告别辞"
    },
    banner: {
      stability: "此选项适用于 Baileys 和 Whatsapp-Web.JS。使用批量操作时，最好使用 Whatsapp-Web.JS，因为它在处理群组时提供更高的稳定性。",
      warning: {
        title: "关于集团自动化的通知",
        blockRisk: "WhatsApp 可以阻止或禁止我的号码吗？",
        realRisk: "是的，这种可能性确实存在，应该认真对待！",
        spamTolerance: "WhatsApp 对垃圾邮件零容忍！",
        monitoring: "它采取严格的规则，对信息的发送和群体行动的执行进行非常严格的监控。",
        attention: "注意：如果有 2% 的收件人举报您的号码或将您的消息标记为垃圾邮件，您的号码将被阻止/禁止！"
      }
    },
    dialog: {
      confirmButton: "继续",
      cancelButton: "外出"
    },
    notifications: {
      colorsLoadError: "加载颜色时出错。",
      noStoredColors: "localStorage 中没有存储颜色。"
    }
  },
  grupoGeralBanlist: {
    table: {
      columns: {
        id: "#",
        number: "数字",
        userId: "用户",
        groupId: "团体",
        createdAt: "日期",
        actions: "行动"
      },
      title: "禁令"
    },
    placeholders: {
      search: "定位"
    },
    buttons: {
      add: "添加",
      delete: "删除"
    },
    dialogs: {
      deleteSingle: "您确实要删除禁令“{banId}”吗？",
      deleteAll: "您确实要删除全部 {banCount} 条禁令记录吗？"
    },
    notifications: {
      deleteSuccess: "禁令 {banId} 已删除！",
      deleteAllSuccess: "所有封禁记录均已删除！",
      groupNameError: "获取 {groupId} 的群组名称时出错。"
    }
  },
  grupoGeralDespedida: {
    table: {
      columns: {
        id: "#",
        message: "信息",
        userId: "用户",
        groupId: "团体",
        createdAt: "日期",
        actions: "行动"
      },
      title: "告别"
    },
    placeholders: {
      search: "定位"
    },
    buttons: {
      add: "添加",
      delete: "删除"
    },
    dialogs: {
      deleteSingle: "您确实要删除 Farewell“{despedidaId}”吗？",
      deleteAll: "您确实要删除 Despedida 的所有 {despedidaCount} 条记录吗？"
    },
    notifications: {
      deleteSuccess: "再见{despedidaId}已删除！",
      deleteAllSuccess: "所有告别记录均已删除！",
      groupNameError: "获取 {groupId} 的群组名称时出错。"
    }
  },
  grupoGeralSaudacao: {
    table: {
      columns: {
        id: "#",
        message: "信息",
        userId: "用户",
        groupId: "团体",
        createdAt: "日期",
        actions: "行动"
      },
      title: "问候"
    },
    placeholders: {
      search: "定位"
    },
    buttons: {
      add: "添加",
      delete: "删除"
    },
    dialogs: {
      deleteSingle: "您确实要删除问候语“{greetingId}”吗？",
      deleteAll: "您确定要删除所有 {saudacaoCount} 条称呼记录吗？"
    },
    notifications: {
      deleteSuccess: "问候语 {saudacaoId} 已删除！",
      deleteAllSuccess: "所有问候记录已被删除！",
      groupNameError: "获取 {groupId} 的群组名称时出错。"
    }
  },
  grupoGeralWordlist: {
    table: {
      columns: {
        id: "#",
        word: "单词",
        userId: "用户",
        groupId: "团体",
        createdAt: "日期",
        actions: "行动"
      },
      title: "禁忌词汇"
    },
    placeholders: {
      search: "定位"
    },
    buttons: {
      add: "添加",
      delete: "删除",
      activateWordWatch: "打开“单词监视”"
    },
    dialogs: {
      deleteSingle: "您确实要删除单词“{wordId}”吗？",
      deleteAll: "您确实要删除全部 {wordCount} 条 Word 记录吗？"
    },
    notifications: {
      deleteSuccess: "单词 {wordId} 已删除！",
      deleteAllSuccess: "所有Word记录已被删除！",
      groupNameError: "获取 {groupId} 的群组名称时出错。"
    }
  },
  grupoGeralModalDespedida: {
    dialog: {
      titleCreate: "创建告别",
      titleEdit: "编辑告别"
    },
    form: {
      message: "告别辞",
      whatsappId: "WhatsApp ID",
      group: "团体"
    },
    notifications: {
      createSuccess: "再见了创造！",
      editSuccess: "編輯再見！",
      errorFetchingGroups: "列出群组时出错。",
      errorSaving: "保存告别时发生错误。"
    }
  },
  grupoGeralModalBan: {
    dialog: {
      titleCreate: "创建禁令",
      titleEdit: "编辑禁令"
    },
    form: {
      number: "禁令号码",
      whatsappId: "WhatsApp ID",
      group: "团体"
    },
    notifications: {
      createSuccess: "禁令已创建！",
      editSuccess: "禁止编辑！",
      errorFetchingGroups: "列出群组时出错。",
      errorSaving: "保存禁令时发生错误。"
    }
  },
  grupoGeralModalSaudacao: {
    dialog: {
      titleCreate: "创建问候语",
      titleEdit: "编辑问候语"
    },
    form: {
      message: "问候语",
      whatsappId: "WhatsApp ID",
      group: "团体"
    },
    notifications: {
      createSuccess: "问候已创建！",
      editSuccess: "已编辑问候语！",
      errorFetchingGroups: "列出群组时出错。",
      errorSaving: "保存问候语时发生错误。"
    }
  },
  grupoGeralModalWordlist: {
    dialog: {
      titleCreate: "创建 Word",
      titleEdit: "编辑单词"
    },
    form: {
      word: "单词（小写）",
      whatsappId: "WhatsApp ID",
      group: "团体"
    },
    notifications: {
      createSuccess: "单词已创建！",
      editSuccess: "文字已編輯！",
      errorFetchingGroups: "列出群组时出错。",
      errorSaving: "保存单词时发生错误。"
    }
  },
  grupoGeralModalWordlistGrupo: {
    dialog: {
      title: "打开“单词监视”"
    },
    form: {
      connection: "联系",
      toggleLabel: "开/关"
    },
    notifications: {
      selectConnection: "请选择一个连接。",
      updateSuccess: "WhatsApp {connection} 更新成功！",
      updateError: "更新 WhatsApp 时出错。检查日志以了解更多详细信息。"
    }
  },
  grupoMassa1: {
    title: "组生成器",
    sections: {
      createMassGroups: "批量创建群组",
      listParticipants: "列出参与者"
    },
    form: {
      connection: "联系",
      groups: "团体",
      groupId: "ID组",
      participants: "参与者"
    },
    notifications: {
      selectConnection: "请选择一个连接。",
      selectGroups: "请选择一个或多个组。",
      fieldsReset: "字段重置后，此页面将被刷新。",
      loadingParticipants: "请稍候，正在加载所有群组参与者..."
    },
    actions: {
      listGroupIds: "列出组 ID",
      listParticipants: "列出参与者",
      exportToXLS: "导出到 XLS",
      clear: "清洁"
    }
  },
  grupoMassa2: {
    title: "操控群组",
    form: {
      connection: "联系",
      groups: "团体",
      changeTitle: "更改标题",
      newTitle: "新标题",
      changeDescription: "变更描述",
      newDescription: "新描述",
      changeImageUrl: "更改图片（URL）",
      newImageUrl: "新图像",
      changeImageFile: "更改图片（上传）",
      uploadImage: "图片上传",
      changePermission: "更改权限",
      adminOnly: "只有管理员可以发送消息"
    },
    actions: {
      modify: "改变",
      clear: "清洁"
    },
    notifications: {
      selectConnection: "请选择一个连接。",
      selectGroups: "请选择一个或多个组。",
      fillTitle: "请用新的标题填写选项。",
      fillDescription: "请用新的描述填写选项。",
      fillImageUrl: "请在选项中填写新图像的 URL。",
      uploadFile: "请上传新文件。"
    },
    loading: {
      modifyingGroups: "请稍候，正在更改群组数据..."
    }
  },
  grupoMassaUsuarios: {
    title: "操纵用户",
    actions: {
      execute: "执行",
      clear: "清除字段",
      reload: "刷新页面"
    },
    form: {
      connection: "联系",
      groups: "团体",
      promoteAdmins: "提升管理员",
      demoteAdmins: "降级管理员",
      addUsers: "添加用户",
      removeUsers: "删除用户",
      importContacts: "导入联系人",
      numbersInput: "数字（以逗号分隔）",
      csvImport: "从 CSV 导入数字",
      selectContacts: "选择联系人",
      numbersCommaSeparated: "数字（以逗号分隔）",
      importCSV: "导入 CSV"
    },
    notifications: {
      selectConnection: "请选择一个连接。",
      selectGroups: "请选择一个或多个组。",
      fillContacts: "请选择或输入联系人。",
      clearFields: "字段重置后，此页面将被刷新。"
    },
    loading: {
      fetchingContacts: "请稍候，正在加载所有系统联系人...",
      executingActions: "请稍候，正在执行操作..."
    }
  },
  grupoMassaModalCriarGrupo: {
    form: {
      createGroups: "创建组",
      connection: "联系",
      groupName: "组名",
      participantNumber: "参加人数",
      groupQuantity: "组数",
      importContacts: "设置联系人/选择联系人",
      selectContact: "选择联系人"
    },
    notifications: {
      selectConnection: "请选择一个连接。",
      fillGroupName: "请在字段中填写团体名称。",
      fillParticipant: "请在字段中填写要添加到新创建的群组的联系人。",
      selectContact: "请选择要添加到新创建的群组的联系人。",
      fillQuantity: "请在字段中填写创建的组数。"
    },
    loading: {
      fetchingContacts: "请稍候，正在加载联系人...",
      creatingGroups: "请稍候，正在创建群组..."
    }
  },
  massaGeral: {
    tabs: {
      template: "群发邮件模板",
      templateVariable: "群发邮件模板+变量",
      text: "大规模枪击事件",
      textVariable: "大规模射击+变量",
      sms: "短信群发"
    },
    dialog: {
      title: "大规模枪击警告",
      description: {
        importantNotice: {
          title: "WhatsApp 可以阻止或禁止我的号码吗？",
          content: "是的，这种可能性确实存在，应该认真对待！"
        },
        additionalInfo: {
          title: "WhatsApp 对垃圾邮件零容忍！",
          content: "它有严格的规则并密切监控群发信息。"
        },
        alert: {
          title: "注意力",
          content: "如果有 2% 的收件人举报您的号码或将您的消息标记为垃圾邮件，<b>您的号码将被阻止/禁止！</b>"
        }
      },
      actions: {
        exit: "外出",
        continue: "继续"
      }
    }
  },
  massaSMS: {
    form: {
      selectService: "选择服务",
      minSeconds: "最短（秒）",
      maxSeconds: "最大（秒）",
      contacts: "联系方式",
      selectContacts: "选择联系人",
      numbersCommaSeparated: "数字（以逗号分隔）",
      importCSV: "从 CSV 导入数字",
      message: "信息"
    },
    notifications: {
      selectService: "请选择一项服务。",
      validMinMax: "请输入有效的最小值和最大值。",
      enterNumbersMessage: "请输入数字和消息。",
      successComtele: "通过 Comtele 进行的群发已成功开始。",
      successConecta: "通过 ConectaStartup 进行的群发已成功开始。",
      successLivson: "通过 BHI 进行的群发已成功开始。",
      errorSending: "发送消息时出错：{error}",
      fieldsCleared: "清冽田野。"
    }
  },
  massaTexto: {
    form: {
      bulkSend: "批量邮件",
      availableFunctions: "此功能适用于 Baileys 和 Whatsapp-Web.JS",
      availableFunctionsWaba: "此功能适用于 WABA",
      selectConnection: "WhatsApp ID",
      minSeconds: "最短（秒）",
      maxSeconds: "最大（秒）",
      contacts: "联系方式",
      groups: "团体",
      tags: "标签",
      kanban: "看板",
      selectTag: "选择标签",
      selectKanban: "选择看板",
      selectContacts: "选择联系人",
      numbersCommaSeparated: "数字（以逗号分隔）",
      importCSV: "从 CSV 导入数字",
      includeText: "包含文本",
      message: "信息",
      includeMedia: "包含媒体（URL）",
      mediaUrl: "媒体网址",
      mediaDescription: "媒体描述",
      includeRecordedAudio: "包含录制的音频",
      audioUrl: "音频网址 (.ogg)",
      includeFile: "包含文件（上传）",
      fileDescription: "文件描述",
      recordedAudio: "录制的音频",
      send: "发送",
      clear: "清除字段",
      fetchingContacts: "请稍候，正在加载所有系统联系人..."
    },
    notifications: {
      selectConnection: "请选择一个连接。",
      enterValidNumbers: "请输入有效的最小值和最大值。",
      chooseSendOption: "请选择一个或多个送货选项。",
      enterMessage: "请输入要发送的消息。",
      enterMediaDetails: "请输入要上传的文件的URL和描述。",
      enterAudioDetails: "请输入音频文件的URL。",
      uploadFile: "请上传文件并输入将要发送的描述。",
      uploadingMessages: "请稍候，您的消息正在加载。",
      messagesSent: "您的消息正在发送。",
      errorSendingMessages: "发送消息时出错。",
      errorFetchingTags: "获取标签时出错。",
      errorFetchingKanbans: "获取看板时出错。",
      errorFilteringContactsByTag: "按标签过滤联系人时出错。",
      errorFilteringContactsByKanban: "通过看板过滤联系人时出错。",
      destiny: "请输入目的地号码"
    }
  },
  massaTextoVariavel: {
    form: {
      availableFunctions: "Baileys 和 Whatsapp-Web.JS 可用的功能",
      minSeconds: "最短（秒）",
      maxSeconds: "最大（秒）",
      includeText: "包含文本",
      includeMedia: "包含媒体（URL）",
      mediaUrl: "媒体网址",
      mediaDescription: "媒体描述",
      includeRecordedAudio: "包含录制的音频",
      audioUrl: "音频网址 (.ogg)",
      includeFile: "包含文件（上传）",
      recordedAudio: "录制的音频",
      send: "发送",
      clear: "清洁",
      dataInputLabel: "数字，变量1，变量2，变量3...",
      instructions: "输入您的媒体消息/描述并使用双花括号中的变量。",
      example: "例如：你好，{{var1}}！您的状态是 {{var2}}，年龄是 {{var3}}..."
    },
    notifications: {
      enterValidNumbers: "请输入有效的最小值和最大值。",
      destiny: "请输入目的地号码。",
      chooseSendOption: "请选择一个或多个送货选项。",
      enterMessage: "请输入要发送的消息。",
      enterMediaDetails: "请输入要上传的文件的URL和描述。",
      enterAudioDetails: "请输入要上传的文件的URL。",
      uploadFile: "请上传文件并输入将要发送的描述。",
      uploadingMessages: "请稍候，您的消息正在加载。",
      messagesSent: "您的消息正在发送。"
    }
  },
  massaTemplate: {
    title: "批量邮件",
    form: {
      selectTemplate: "选择模板",
      selectTag: "选择标签",
      fetchingContacts: "请稍候，正在加载联系人...",
      numbersCommaSeparated: "用逗号分隔的数字",
      importCSV: "导入 CSV",
      minSeconds: "最短（秒）",
      maxSeconds: "最大（秒）",
      contacts: "联系方式",
      selectConnection: "选择连接",
      errorFetchingTags: "加载标签时出错",
      chooseTemplate: "选择模板",
      headerFormat: "标头格式：{format}",
      variableNumber: "价值"
    },
    notifications: {
      chooseMinTime: "请选择最短时间。",
      chooseMaxTime: "请选择大于最短时间的最长时间。",
      chooseConnection: "请选择一个连接。",
      chooseContact: "请选择一个联系人。",
      messagesSent: "已发送模板：{sent} 个，共 {total} 个。",
      errorSendingTemplate: "发送模板时出错。",
      uploadingMessages: "请稍候，正在发送消息...发送完成前请勿关闭此页面。",
      uploadingTemplate: "请稍候，正在加载模板...",
      errorFetchingTags: "获取标签时出错。"
    },
    table: {
      variable: "多变的",
      value: "价值"
    }
  },
  massaTemplateVariavel: {
    title: "带有变量的批量邮件",
    form: {
      availableFunctions: "此功能适用于官方 API（WABA）",
      chooseTemplate: "选择模板",
      minSeconds: "最短（秒）",
      maxSeconds: "最大（秒）",
      numberFormat: "数字（格式：数字,变量1,变量2）",
      fetchingTemplates: "正在加载模板..."
    },
    notifications: {
      messagesSent: "已发送模板：{sent} 个，共 {total} 个。",
      uploadingMessages: "请稍候，正在发送消息...",
      chooseConnection: "请选择一个连接。",
      chooseTemplate: "请选择一个模板。",
      completeFields: "请填写所有必填字段。",
      sendingCompleted: "提交已完成。",
      errorFetchingTemplates: "加载模板时出错。检查您的 API 连接。"
    },
    variables: {
      templateVariables: "模板变量",
      expectedFormat: "每行的预期格式：数字，{变量}"
    }
  },
  sessao: {
    compactView: "紧凑视图",
    normalView: "正常视图",
    page: "页",
    title: "沟通渠道",
    addChannel: "添加频道",
    defaultConnection: "标准连接",
    editChannel: "编辑频道",
    revalidateWebhook: "重新验证 Webhook",
    revalidateConnection: "重新验证连接",
    chatbot: "聊天机器人",
    queue: "队列",
    user: "用户",
    qrCode: "二维码",
    connect: "连接",
    edit: "编辑",
    newQrCode: "新的二维码",
    connecting: "正在连接",
    disconnect: "断开",
    deleteConnection: "删除连接",
    setAsDefault: "设为默认值",
    closeOpenTickets: "关闭所有打开的服务",
    closePendingTickets: "关闭所有待处理的呼叫",
    syncMessagesUpdate: "更新消息同步时间",
    syncMessages: "同步消息",
    syncPrompt: "注意力！！您确实要同步吗？ ",
    syncMessagesPrompt: "导入消息的限制",
    syncWarningPrompt: "该过程可能需要几分钟，具体取决于您的聊天列表的大小。",
    syncMessagesHint: "仅允许正数",
    noQueueTooltip: "仅当服务尚未具有手动或聊天机器人定义的队列时，才会分配队列。",
    noUserTooltip: "仅当服务尚未手动或由聊天机器人定义服务员时，才会分配用户。",
    processStarted: "进程已启动。",
    closingOpenTickets: "关闭开放的预约。",
    closingPendingTickets: "关闭待处理的服务。",
    syncingMessages: "请稍等片刻，系统将为每个用户导入 {limit} 条消息。",
    syncError: "尝试同步消息时出错。",
    invalidValue: "用户输入的值无效或未提供。",
    actionError: "尝试执行操作时出错。",
    actionSuccess: "操作已成功执行。",
    noPageConfigured: "未配置页面。",
    selectChatbot: "选择聊天机器人",
    selectQueue: "选择队列",
    selectUser: "选择用户",
    defaultTooltip: "将此连接设置为默认连接。",
    deleteTooltip: "永久删除此连接。",
    syncTooltip: "同步旧消息。",
    actionWarningDelete: "注意力！您确实要删除此连接吗？",
    disconnectWarning: "注意力！您确定要断开此会话吗？",
    defaultSet: "连接已成功设置为默认值。",
    closeOpenTicketsPrompt: "注意力！！您确实要关闭此频道的所有打开的呼叫吗？",
    closePendingTicketsPrompt: "注意力！！您确实要关闭此频道的所有待接来电吗？",
    disconnectPrompt: "注意力！！您确定要断开连接吗？",
    deleteChannelPrompt: "注意力！！您确实要删除吗？",
    deleteChannelMessage: "此频道中打开的聊天将被关闭，可以在支持面板上看到，但将不再可访问。",
    tokenRequiredTelegram: "需要告知Telegram的token。",
    qrCodeGenerated: "QR Code 生成成功。",
    errorGeneratingQrCode: "生成二维码时出错。",
    whatsappSaveError: "保存 WhatsApp 号码时出错。",
    whatsappSaved: "连接添加成功。"
  },
  sessaoItemStatus: {
    waitingQrCode: "等待读取二维码",
    clickQrCodeButton: "点击“QR CODE”按钮，用手机读取二维码即可开始会话",
    disconnectedError: "无法启动该通道的通信。",
    whatsappDisconnected: "确保您的手机已连接到互联网并重试，或请求新的二维码。",
    wabaDisconnected: "尝试再次连接。如果错误仍然存在，请确认令牌是否正确。",
    telegramDisconnected: "尝试再次连接。如果错误仍然存在，请确认令牌是否正确。",
    instagramDisconnected: "尝试再次连接。如果错误仍然存在，请确认凭据是否正确。",
    connectionEstablished: "连接已建立",
    noDataLoading: "正在加载数据...",
    lostConnection: "蜂窝连接丢失",
    checkPhoneConnection: "确保您的手机已连接到互联网并且 WhatsApp 已打开，或者单击“断开连接”按钮以获取新的二维码。",
    establishingConnection: "正在建立连接。",
    mightTakeTime: "这可能需要一段时间...",
    lastUpdate: "最后更新"
  },
  sessaoModalQrcode: {
    title: "扫描二维码开始会议",
    pairingCode: "配对代码：",
    waitingQrCode: "等待二维码",
    openQrCodeInNewTab: "在新标签页中打开二维码",
    qrCodeIssue: "如果您在阅读时遇到任何问题，请申请新的二维码。",
    newQrCode: "新的二维码"
  },
  sessaoModalWhatsapp: {
    novo: {
      configuracaoSmtp: "SMTP配置",
      servidorSmtp: "SMTP服务器",
      exemploSmtp: "例: smtp.gmail.com",
      porta: "端口",
      exemploPorta: "例: TLS使用587，SSL使用465",
      conexaoSegura: "安全连接 (SSL/TLS)",
      habilitarConexaoSegura: "启用安全连接",
      usuarioEmail: "用户/邮箱",
      seuEmailAutenticacao: "您的认证邮箱",
      senha: "密码",
      senhaAplicativo: "您的密码或应用密码",
      emailRemetente: "发件人邮箱",
      emailRemetenteHint: "将显示为发件人的邮箱",
      emailResposta: "回复邮箱 (可选)",
      emailRespostaHint: "回复将发送到的邮箱",
      configuracaoOAuth2: "OAuth2配置 (推荐用于Gmail)",
      clientIdOAuth2: "Google Cloud Console的客户端ID",
      clientIdOAuth2Hint: "Google Cloud Console的客户端ID",
      exemploClientIdOAuth2: "例: 123456789-abcdef.apps.googleusercontent.com",
      clientSecretOAuth2: "Google Cloud Console的客户端密钥",
      clientSecretOAuth2Hint: "Google Cloud Console的客户端密钥",
      redirectUri: "重定向URI (可选)",
      redirectUriHint: "OAuth2回调URL (留空以使用默认)",
      exemploRedirectUri: "例: https://yourdomain.com/auth/callback",
      comoObterCredenciaisOAuth2: "如何获取OAuth2凭据:",
      acessarGoogleCloudConsole: "访问 https://console.cloud.google.com",
      criarProjeto: "创建一个项目或选择现有项目",
      habilitarGmailAPI: "启用Gmail API",
      criarCredenciaisOAuth2: "创建OAuth2凭据",
      configureUrlsAutorizadas: "配置授权的URL",
      gmailOAuth2: "Gmail OAuth2:",
      gmailOAuth2Hint: "Gmail要求第三方应用使用OAuth2认证。",
      configurarOAuth2: "配置OAuth2",
      status: "状态:",
      statusHint: "已认证并正常运行",
      oAuth2Configurado: "OAuth2已配置:",
      oAuth2ConfiguradoHint: "Gmail的OAuth2认证已启用。",
      protocoloAtivo: "活动协议:",
      statusDaConexao: "连接状态:",
      detalhes: "详细信息:",
      testarSmtp: "测试SMTP",
      verificarStatus: "检查状态",
      abraUrlAutorizacao: "打开授权URL并按照说明操作。授权后，您将收到一个代码。",
      errorConfigurarOAuth2: "配置OAuth2错误: ",
      configOAuth2: "OAuth2配置",
      completarConfiguracao: "完成配置",
      cancelar: "取消",
      errorCompletarOAuth2: "完成OAuth2时出错: ",
      salveWhatsAppPrimeiro: "请先保存WhatsApp以测试SMTP连接",
      conexaoSmtpTestadaComSucesso: "SMTP连接测试成功！",
      falhaNoTesteSmtp: "SMTP测试失败: ",
      erroAoTestarSmtp: "测试SMTP时出错: ",
      statusDaConexaoAtualizado: "连接状态已更新！",
      erroAoVerificarStatus: "检查状态时出错: "
    },    
    selectNewChannel1: "如果会话量较大或在不同类型（API）的渠道之间转移，会导致同步问题。在这种情况下，请先备份会话，并在确认所有会话已成功转移之前不要删除旧渠道。",
    selectNewChannel2: "请选择新的渠道以转移会话。注意！此操作不可撤销。",
    selectNewChannel3: "如果会话量大或渠道类型（API）不同，请在数据库中直接更改数据，并在 DBA 的协助下完成。",
    transferringChannels: "正在转接电话...",
    checkErrors: "哎呀！检查错误...",
    whatsappSaved: "联系 ",
    sucess: " 成功地！",
    edited: "编辑",
    created: "创建",
    variables: "变量",
    attentionEvo: "一旦创建 Evolution 频道，其名称将无法编辑。避免使用空格或特殊字符，因为它们会被自动删除。",
    title: "添加或编辑频道",
    editChannel: "添加或编辑频道",
    createChannel: "添加或编辑频道",
    type: "类型",
    tokenTelegram: "电报代币",
    pairingCode: "配对码",
    exactNumber: "确切的 WhatsApp 帐号",
    informationTab: "信息",
    recommendationsTab: "建议",
    wppWarning: {
      0: "在将您的 WhatsApp 连接到系统之前，请先删除与 WhatsApp Web 的连接。",
      1: "这取决于智能手机",
      2: "需要定期重新连接。",
      3: "为了完美运行，请保持手机同步，始终开启并连接到互联网，禁用屏幕保护程序并保持 WhatsApp 应用程序打开。",
      4: "存档手机上不必要的或较旧的对话",
      5: "我们建议使用 Chrome 浏览器和 Windows 操作系统。",
      6: "请勿在其他浏览器中打开已在平台上同步号码的 WhatsApp Web。如果发生这种情况，操作可能会受到影响。",
      7: "非官方服务",
      8: "需要定期重新连接",
      9: "最好使用位于巴西和您所在州的 VPS",
      10: "我们建议使用 Chrome 浏览器和 Windows 操作系统。",
      11: "可能存在同步问题，例如消息丢失和接收"
    },
    wabaAdvantages: {
      0: "保证连接稳定性",
      1: "无禁令风险",
      2: "防止账户盗窃的安全",
      3: "允许使用按钮",
      4: "允许使用模板"
    },
    typeMessage: "输入消息",
    save: "节省",
    user: "用户",
    numberId: "电话号码识别",
    bmId: "WhatsApp 商业帐户识别",
    apiVersion: "元 API 版本",
    tokenWaba: "Meta 商务经理代币",
    igData: "Instagram 帐户详细信息",
    transferChannel: "转移通道",
    selectNewChannel: "选择新频道转接电话",
    newChannel: "新频道",
    confirm: "确认",
    attention: "注意力",
    cancel: "取消",
    timeSelection: "选择时间",
    birthdayDateMessage: "生日留言",
    selectHub: "选择一个中心",
    importMessage: "从设备导入消息",
    importMessageCaption: "通过启用此选项，来自设备的消息将被导入系统。",
    importGroupMessage: "导入群组消息",
    dateHourSync: "导入开始日期和时间",
    queueImport: "队列导入消息",
    qrCodeWarning1: "此事件仅在读取二维码时有效。",
    qrCodeWarning2: "在导入期间，关闭内部聊天机器人和其他交互，并保持运行时间开放，因为进入系统的每条消息都会与这些设置进行交互（如果它们处于活动状态）。",
    ok: "好的",
    dateHourEndSync: "导入结束日期和时间",
    finalizeTicket: "导入后关闭工单",
    chatGptConfig: {
      model: "ChatGPT 模板",
      title: "ChatGPT 设置",
      apiKey: "ChatGPT API 密钥",
      organizationKey: "ChatGPT 组织密钥",
      stopWord: "Word 关闭 ChatGPT",
      prompt: "选项 #1：ChatGPT 提示",
      resetHistory: "恢复 ChatGPT 历史记录",
      assistantOption: "选项 #2：ChatGPT 助手",
      assistantId: "输入助理 ID",
      resetPrompt: "更改提示后，应通过单击下面的按钮恢复 ChatGPT 历史记录：",
      removeAssistant: "删除向导",
      voiceModel: "语音模型（合金、回声、寓言、玛瑙、新星、闪光）",
      chatgptVoice: "启用语音回复（ChatGPT Voice）"
    },
    lmConfig: {
      title: "LM Studio设置",
      url: "LM 工作室网址",
      model: "法学硕士模式",
      stopWord: "Word 关闭 LM Studio",
      prompt: "法学硕士申请提示"
    },
    geminiConfig: {
      title: "双子座设置",
      url: "双子座 API 密钥",
      model: "双子座模型",
      stopWord: "关闭双子座的词",
      prompt: "双子座的提示"
    },
    qwenConfig: {
      title: "Qwen 设置",
      url: "Qwen API 密钥",
      model: "Qwen 模型",
      stopWord: "关闭 Qwen 的单词",
      prompt: "提示 Qwen"
    },
    claudeConfig: {
      title: "克劳德的设置",
      url: "Claude 的 API 密钥",
      model: "克劳德的模型",
      stopWord: "让克劳德闭嘴的话",
      prompt: "克劳德的提示"
    },
    deepseekConfig: {
      title: "Deepseek 设置",
      url: "Deepseek API密钥",
      model: "Deepseek 模型",
      stopWord: "关闭 Deepseek 的命令",
      prompt: "提示 Deepseek"
    },
    grokConfig: {
      title: "Grok 设置",
      url: "Grok API 密钥",
      model: "Grok 模型",
      stopWord: "关闭 Grok 的单词",
      prompt: "Grok 提示符"
    },
    ollamaConfig: {
      title: "Ollama 设置",
      url: "奥拉玛网址",
      model: "法学硕士模式",
      stopWord: "关闭 Ollama 的单词",
      prompt: "法学硕士申请提示"
    },
    proxyConfig: {
      useProxy: "使用代理",
      proxyUrl: "代理 URL",
      proxyUser: "代理用户",
      proxyPass: "代理密码"
    },
    enable: {
      webPush: "启用 Web 推送（测试版）",
      webPush2: "通过启用此选项，系统将向应用程序发送通知",
      autoEvaluation: "启用自动评估",
      autoEvaluation2: "通过启用此选项，解决每个票证时将自动发送服务评估。",
      transcribeAudio: "启用音频转录",
      transcribeAudio2: "通过启用此选项，接收到的音频将被转录。",
      transcribeAudio5: "JSON 配置",
      transcribeAudio4: "以 JSON 格式输入 Google Speech-To-Text 的设置。",
      transcribeAudio3: "音频转录配置（JSON）",
      autoDistribution: "启用自动分发",
      autoDistribution2: "通过启用此选项，新票将在系统服务员之间平均分配。",
      destroyMessage: "启用消息销毁",
      destroyMessage2: "通过启用此选项，已删除的消息将从系统中销毁。",
      birthdayMessage: "启用向过生日的人发送消息",
      birthdayMessage2: "通过在联系人生日时启用此选项，将发送下面字段中定义的消息。",
      birthdayMessage3: "生日留言",
      birthdayMessage4: "信息",
      birthdayMessage5: "文件（创建频道后上传文件）",
      birthdayMessage6: "选择文件",
      birthdayMessage7: "时间：系统不考虑分钟（输入完整时间 - 例如 12:00）：",
      birthdayMessage8: "选择时间",
      removeBirthdayFile: "删除生日文件",
      confirmRemoveBirthdayFile: "确认删除",
      confirmRemoveBirthdayFileMessage: "您确定要删除生日文件吗？",
      birthdayFileRemoved: "生日文件删除成功！",
      externalIntegration: "启用外部集成的自动关闭",
      externalIntegration2: "启用此选项后，打开服务时，ChatGPT、Typebot、Dify、N8N 和 DialogFlow 的交互将被关闭。",
      waitProcessExternalInteraction: "通过外部集成（Typebot、ChatGPT……）启用等待消息处理",
      waitProcessExternalInteraction2: "当收到多条支持消息时，系统只有在回复第一条消息后才会处理新消息。在此期间收到的消息将不会与外部集成交互。"
    },
    farewell: "告别",
    farewellMessage: "服务告别信息",
    automaticClosure: "自动关闭的关键字",
    automaticClosure2: "这是一个关键字，收到后将自动关闭票证。",
    wavoipWarn: "要连接多个令牌，请输入以逗号分隔的键（token1，token2 ...）",
    whatsappTypes: {
      waba: "WhatsApp 官方 (WABA)",
      baileys: "WhatsApp 百利甜酒 (二维码)",
      whatsapp: "WhatsApp WebJs（二维码）",
      meow: "WhatsApp 喵呜 (QRCode - Beta 版)",
      evo: "WhatsApp 进化（QRCode - 测试版）",
      telegram: "电报",
      hub: "中心通知我"
    },
    conectLimit: "已达到连接限制",
    saveError: "保存频道时出错。请重试。",
    wabaError: "哎呀！ WABA数据不正确，请检查您BM中的APP标识符、token和权限是否正确……",
    integrationUrlCopied: "集成 URL 已复制！",
    attentionMessage: "您确实要将所有服务转移到新频道吗？此操作不可逆。",
    noChannelSelected: "选择新频道！",
    newChannelSuccess: "频道转移成功！",
    connectionError: "传输频道时出错。请重试。",
    autoDistributeInfo: "自动在可用代理之间分配票证。",
    transcribeAudioInfo: "将接收到的音频自动转录为文本。",
    birthdayMessageInfo: "自动向联系人发送生日消息的配置。",
    farewellInfo: "关闭服务时自动发送消息。",
    confirmChannelTransfer: "您确定要将呼叫转接到该信道吗？",
    importMessagesInfo: "将消息从设备导入到系统。",
    importGroupsInfo: "导入时包括群组消息。",
    externalIntegrationDisableInfo: "开始通话时自动禁用外部集成。",
    dialogflowConfig: {
      projectId: "Dialogflow 项目 ID",
      language: "语言",
      jsonFile: "JSON配置文件",
      jsonContent: "JSON 文件内容"
    },
    wavoip: {
      title: "Wavoip 设置",
      token: "Wavoip 令牌",
      info: "为多个帐户添加以逗号分隔的令牌。"
    },
    hubConfig: {
      title: "集线器设置",
      selectHub: "选择一个中心",
      hubIntegration: "通知中心配置"
    },
    n8nConfig: {
      title: "N8N 设置",
      url: "N8N 网址",
      instructions: "在本节中配置与 N8N 的集成流程。"
    },
    dialogConfig: {
      title: "Dialogflow 设置",
      key: "Dialogflow API 密钥",
      url: "Dialogflow 网址",
      name: "Dialogflow 中的机器人名称",
      restartWord: "Word 重新启动 Dialogflow",
      stopWord: "关闭 Dialogflow 的 Word",
      jsonContent: "Json文件内容",
      jsonFile: "Json 文件名",
      lang: "语言",
      projectId: "项目 ID",
      buttonWarning: "启用此选项将向 Dialogflow 选项发送按钮，否则将发送列表。"
    },
    typeConfig: {
      title: "Typebot 设置",
      key: "Typebot API 密钥",
      url: "Typebot 网址",
      name: "Typebot 上的机器人名称",
      restartWord: "Word 重新启动 Typebot",
      stopWord: "Word 关闭 Typebot",
      type: "配置类型",
      unknowMessage: "无效响应消息",
      buttonChoose: "按钮选择消息",
      buttons: "启用按钮",
      buttonWarning: "启用此选项将向 Typebot 选项发送按钮，否则将发送列表。"
    },
    difyConfig: {
      title: "区分设置",
      key: "Dify API 密钥",
      url: "区分 URL",
      restartWord: "Word 重启 Dify",
      stopWord: "关闭 Dify 的单词",
      type: "配置类型",
      typeOptions: {
        agent: "代理人",
        textGenerator: "文本生成器",
        chatBot: "聊天机器人",
        workflow: "流动"
      }
    },
    additionalSettings: {
      title: "非官方服务的附加层",
      proxy: {
        useProxy: "使用代理",
        proxyUrl: "代理网址 (http://177.69.214.155:53281)",
        proxyUser: "代理用户",
        proxyPass: "代理密码"
      }
    },
    waiting: "请稍候，正在尝试创建您的频道...",
    errors: {
      invalidJson: "输入的 JSON 格式无效。请更正并重试。",
      requiredField: "此字段是必需的。",
      operationFailed: "操作失败。请重试。"
    },
    success: {
      operationCompleted: "操作成功完成！",
      channelSaved: "频道已成功保存！",
      transferCompleted: "转移成功完成！"
    },
    variaveis: {
      0: {
        label: "姓名",
        value: "{{姓名}}"
      },
      1: {
        label: "问候",
        value: "{{问候}}"
      },
      2: {
        label: "协议",
        value: "{{协议}}"
      },
      3: {
        label: "电子邮件（如有）",
        value: "{{电子邮件}}"
      },
      4: {
        label: "电话",
        value: "{{phoneNumber}}"
      },
      5: {
        label: "看板（如果有）",
        value: "{{看板}}"
      },
      6: {
        label: "陪同人员（如出席）",
        value: "{{用户}}"
      },
      7: {
        label: "服务员电子邮件（如果正在服务）",
        value: "{{用户邮箱}}"
      },
      8: {
        label: "名字（如有）",
        value: "{{名}}"
      },
      9: {
        label: "姓氏（如有）",
        value: "{{姓}}"
      },
      10: {
        label: "公司（如有）",
        value: "{{businessName}}"
      }
    },
    variaveisAniversario: {
      0: {
        label: "姓名",
        value: "{{姓名}}"
      },
      1: {
        label: "问候",
        value: "{{问候}}"
      },
      2: {
        label: "电子邮件（如有）",
        value: "{{电子邮件}}"
      },
      3: {
        label: "电话",
        value: "{{phoneNumber}}"
      },
      4: {
        label: "名字（如有）",
        value: "{{名}}"
      },
      5: {
        label: "姓氏（如有）",
        value: "{{姓}}"
      },
      6: {
        label: "公司（如有）",
        value: "{{businessName}}"
      }
    }
  },
  sessaoTenant: {
    communicationChannels: "沟通渠道",
    tenant: "租户",
    name: "姓名",
    status: "地位",
    session: "会议",
    number: "数字",
    lastUpdate: "最后更新",
    default: "标准",
    actions: "行动",
    editConnection: "编辑连接",
    deleteConnection: "删除连接",
    deleteAttention: "注意力！！您确实要删除吗？",
    deleteWarning: "如果您已经为该 WhatsApp 生成了呼叫，则删除它并不是一个好主意。",
    yes: "是的",
    no: "不",
    errorLoadingColors: "加载颜色时出错"
  },
  sessaoTenantStatus: {
    waitingQrCode: "等待读取二维码",
    clickQrCodeButton: "点击“QR CODE”按钮，用手机扫描二维码即可开始会话",
    connectionFailed: "无法启动该通道的通信。",
    whatsappCheck: "请确保您的手机已连接到互联网，然后重试，或请求新的二维码",
    telegramCheck: "尝试再次连接。如果错误仍然存在，请确认令牌是否正确。",
    instagramCheck: "尝试再次连接。如果错误仍然存在，请确认凭据是否正确。",
    connectionEstablished: "连接已建立！",
    connectionLost: "蜂窝连接丢失",
    ensureInternet: "确保您的手机已连接到互联网并且 WhatsApp 已打开，或单击“断开连接”按钮以获取新的二维码",
    establishingConnection: "正在建立连接。",
    thisMayTakeTime: "这可能需要一段时间...",
    lastUpdate: "最后更新："
  },
  relatorioContatosAtendimento: {
    unknownChannel: '未知频道',
    yes: "是的",
    no: "不",
    sheetName: "报告",
    sheetTitle: " 服务报告",
    title: "票务报告",
    filtersLegend: "过滤器（票证创建日期）",
    startDate: "开始",
    endDate: "结尾",
    status: {
      status: "地位",
      open: "打开",
      closed: "关闭",
      pending: "待办的"
    },
    queues: "队列",
    channels: "频道",
    demands: "要求",
    connections: "連接",
    users: "用户",
    minValue: "最小值",
    maxValue: "最大值",
    generateButton: "生成",
    printButton: "打印",
    excelButton: "Excel",
    selectStatus: "选择状态",
    selectQueues: "选择队列",
    selectChannels: "选择频道",
    selectDemands: "选择需求",
    selectConnections: "选择连接",
    selectUsers: "选择用户",
    inputMinValue: "输入最小值",
    inputMaxValue: "输入最大值",
    tableHeaders: {
      ticketNotes: "观察",
      id: "ID",
      status: "地位",
      name: "姓名",
      number: "数字",
      connection: "联系",
      lastMessage: "最后一条消息",
      unreadMessages: "未读消息",
      demand: "要求",
      queues: "队列",
      channel: "渠道",
      value: "价值",
      creationDate: "创建日期"
    },
    notifications: {
      loadError: "加载数据时出错。",
      noDates: "填写日期以生成报告。",
      noQueues: "选择要生成报告的队列。",
      reportGenerated: "报告生成成功！",
      exportingError: "导出表时出错。",
      exportSuccess: "报告生成成功！",
      exportError: "导出报告时出错。请重试。",
      loadingMotives: "加载需求时出现问题。",
      loadingUsers: "加载用户时出现问题。",
      loadingQueues: "加载队列时出错。"
    }
  },
  relatorioContatosCarteira: {
    sheetName: "报告",
    sheetTitle: " 服务报告",
    title: "投资组合联系人报告",
    filters: "过滤器",
    tableHeaders: {
      name: "姓名",
      whatsapp: "WhatsApp",
      email: "电子邮件",
      wallets: "钱包"
    },
    generateButton: "生成报告",
    printButton: "打印",
    excelButton: "导出到 Excel",
    notifications: {
      selectWallet: "哎呀...要生成报告，您必须至少选择一个投资组合。",
      reportGenerated: "报告生成成功！"
    }
  },
  relatorioContatosEstado: {
    sheetName: "报告",
    sheetTitle: " 服务报告",
    title: "按州划分的联系报告",
    filters: "过滤器",
    tableHeaders: {
      name: "姓名",
      whatsapp: "WhatsApp",
      email: "电子邮件",
      state: "状态"
    },
    generateButton: "生成报告",
    printButton: "打印",
    excelButton: "导出到 Excel",
    notifications: {
      selectState: "哎呀...要生成报告，您必须至少选择一个州。",
      reportGenerated: "报告生成成功！"
    }
  },
  relatorioContatosEtiqueta: {
    sheetName: "报告",
    sheetTitle: " 服务报告",
    title: "按标签分类的联系人报告",
    filters: "过滤器",
    tableHeaders: {
      name: "姓名",
      whatsapp: "WhatsApp",
      email: "电子邮件",
      tags: "标签"
    },
    generateButton: "生成报告",
    printButton: "打印",
    excelButton: "导出到 Excel",
    notifications: {
      selectTags: "哎呀...要生成报告，您必须至少选择一个标签。",
      reportGenerated: "报告生成成功！"
    }
  },
  relatorioContatosGeral: {
    sheetName: "报告",
    sheetTitle: " 服务报告",
    title: "联系报告",
    filters: "过滤器（联系人创建日期）",
    tableHeaders: {
      empty: "空的",
      extraInfo: "额外信息",
      name: "姓名",
      whatsapp: "WhatsApp",
      email: "电子邮件"
    },
    generateButton: "生成报告",
    printButton: "打印",
    excelButton: "导出到 Excel",
    notifications: {
      reportGenerated: "报告生成成功！"
    }
  },
  relatorioContatosResumo: {
    sheetName: "报告",
    sheetTitle: " 服务报告",
    title: "用户服务总结报告",
    filters: "过滤器（服务日期）",
    tableHeaders: {
      name: "姓名",
      email: "电子邮件",
      pending: "待办的",
      inProgress: "在役",
      resolved: "已解决",
      total: "全部的"
    },
    generateButton: "生成报告",
    printButton: "打印",
    excelButton: "导出到 Excel",
    notifications: {
      reportGenerated: "报告生成成功！"
    }
  },
  relatorioContatosKanban: {
    sheetName: "报告",
    sheetTitle: " 服务报告",
    title: "看板联系报告",
    filters: "过滤器",
    tableHeaders: {
      name: "姓名",
      whatsapp: "WhatsApp",
      email: "电子邮件",
      kanban: "看板"
    },
    generateButton: "生成报告",
    printButton: "打印",
    excelButton: "导出到 Excel",
    notifications: {
      reportGenerated: "报告生成成功！",
      selectKanban: "哎呀...要生成报告，您必须至少选择一个看板。"
    }
  },
  webphonecall: {
    callStatus: {
      accept: "公认",
      accept_elsewhere: "已被其他用户接受",
      reject_elsewhere: "被其他用户拒绝",
      terminate: "完全的",
      reject: "被拒绝",
      outcoming_calling: "呼唤",
      preaccept: "呼唤",
      relaylatency: "呼唤",
      unknown: "未知"
    },
    tooltips: {
      clear: "清洁",
      close: "关闭",
      call: "连接",
      hangUp: "关闭",
      mute: "变异",
      unmute: "取消静音"
    },
    labels: {
      keypad: "键盘",
      display: "屏幕",
      duration: "期间"
    },
    placeholders: {
      phoneNumber: "输入号码"
    }
  },
  webphone: {
    callStatus: {
      accept: "公认",
      accept_elsewhere: "已被其他用户接受",
      reject_elsewhere: "被其他用户拒绝",
      terminate: "完全的",
      reject: "被拒绝",
      outcoming_calling: "呼唤",
      preaccept: "呼唤",
      relaylatency: "呼唤",
      offer: "致电优惠",
      unknown: "未知"
    },
    tooltips: {
      clear: "清洁",
      close: "关闭",
      call: "连接",
      hangUp: "关闭",
      accept: "接受",
      reject: "拒绝",
      mute: "变异",
      unmute: "取消静音"
    },
    labels: {
      duration: "期间",
      caller: "呼叫者",
      inbox: "收件箱",
      phoneNumber: "电话号码"
    },
    placeholders: {
      phoneNumber: "输入号码"
    }
  },
  chatgptField: {
    placeholders: {
      apiKey: "输入 ChatGpt API 密钥",
      orgId: "输入组织 ID",
      offKeyword: "关闭 ChatGpt 的关键字",
      prompt: "ChatGpt 提示"
    }
  },
  delayField: {
    placeholders: {
      delayValue: "输入延迟值（以秒为单位）"
    }
  },
  typebotField: {
    placeholders: {
      url: "输入 Typebot URL",
      name: "输入 Typebot 的名称",
      offKeyword: "关闭 Typebot 的关键字",
      restartKeyword: "重启 Typebot 的关键字"
    }
  },
  mediaField: {
    labels: {
      uploadFile: "媒体合成消息",
      replaceFile: "替换文件",
      downloadPdf: "下载 PDF",
      captionPlaceholder: "标题"
    },
    errors: {
      fileError: "加载文件时出错",
      checkFiles: "请检查已上传的文件并重试。"
    }
  },
  messageField: {
    placeholders: {
      typeMessage: "在此处输入您的消息..."
    },
    tooltips: {
      emoji: "表情符号",
      variables: "变量"
    },
    variables: {
      name: "姓名",
      greeting: "问候",
      protocol: "协议",
      email: "电子邮件（如有）",
      phoneNumber: "电话",
      kanban: "看板（如果有）",
      user: "陪同人员（如出席）",
      userEmail: "服务员的电子邮件（如果在服务中）",
      firstName: "名字（如有）",
      lastName: "姓氏（如有）",
      businessName: "公司（如有）"
    }
  },
  messageOptionField: {
    placeholders: {
      typeMessage: "在此处输入您的消息...",
      options: "选项"
    },
    hints: {
      options: "根据目标频道支持，选项将被视为列表/按钮或纯文本。"
    },
    tooltips: {
      emoji: "表情符号"
    }
  },
  webhookField: {
    placeholder: "添加 Webhook (GET)",
    tooltip: {
      variables: "变量"
    },
    variables: {
      name: "姓名",
      greeting: "问候",
      protocol: "协议",
      email: "电子邮件（如有）",
      phoneNumber: "电话",
      kanban: "看板（如果有）",
      user: "陪同人员（如出席）",
      userEmail: "服务员的电子邮件（如果在服务中）",
      firstName: "名字（如有）",
      lastName: "姓氏（如有）",
      businessName: "公司（如有）"
    }
  },
  nodeForm: {
    ChatBotBlockField: "阻止聊天机器人",
    OpportunityField: "机会",
    GoogleAgendaField: "Google 日历",
    ScheduleField: "日程",
    WebhookAllField: "Webhooks",
    ChatGPTField: "ChatGPT",
    ChatFlowField: "聊天机器人流程",
    MessageField: "信息",
    MediaField: "媒体",
    TypebotField: "打字机器人",
    ChatgptField: "ChatGpt",
    DelayField: "延迟",
    TagField: "标签",
    KanbanField: "看板",
    WebhookField: "Webhook",
    routeTo: "路线至",
    routeToChatgpt: "当收到关闭的关键字时，路线至:",
    key: "钥匙",
    redefine: "重置",
    welcomeMessage: "问候消息（队列/用户）",
    welcomeMessage2: "当机器人将服务定向到队列或用户时，将发送此消息。",
    fallbackMessage: "如果没有发送预期的响应",
    fallbackMessage2: "如果客户端发送的响应与阶段条件的预期值不匹配，则会出现此异常。",
    keyWord: "启动流程的关键字",
    keyWord2: "当客户端发送定义的关键字时，将触发此交互，并且客户端将被转发到配置的队列/用户。",
    noAnswer: "没有回应",
    noAnswer2: "在指定时间之后，如果客户没有回应，机器人将把请求转发到提供的队列/用户。",
    hourMessage: "离开消息",
    hourMessage2: "在给定时间之后，如果客户没有回应，则如果之前选择的设置是终止，机器人将发送此消息。",
    maxAttempts: "机器人最大尝试次数",
    maxAttempts2: "一旦超过了问答重试的最大次数，如果客户没有发送有效的回复，机器人就会将其转发给配置的队列/用户。",
    message: "信息",
    message2: "反馈信息",
    firstInteraction: "首次互动中的定位",
    firstInteraction2: "此交互将在与客户第一次交互时触发，并且客户将被转发到配置的队列/用户。",
    outBussinesHour: "如果超出营业时间",
    outBussinesHour2: "如果客户在服务时间之外发送消息，则会触发此交互，并且客户将被转发到配置的队列/用户。",
    selfDistribution: "自动分发服务",
    selfDistribution2: "否：已禁用",
    selfDistribution3: "随机：将随机设置用户。",
    selfDistribution7: "平衡：将以平衡的方式为队列中的用户设置用户。",
    selfDistribution4: "不",
    closeTicket: "结束服务",
    closeTicket2: "如果客户输入了一些预期的信息，服务将被终止。",
    endMessage: "关闭消息（队列/用户）",
    endMessage2: "当机器人完成对队列或用户的服务时，将发送此消息。",
    warning1: "阶段代表初次接触",
    warning2: "- 如果这是客户的第一次联系，系统",
    warning3: "会自动将客户的信息保存到日历中。",
    warning4: "- 机器人将与客户发起的服务进行交互。",
    warning5: "- 如果服务被用户接管，机器人将停止交互。",
    warning6: "- 与 Typebot、ChatGPT 和阻止聊天机器人的交互必须始终是步骤中的最后一个节点；内部聊天机器人将被关闭，服务将按照定义的集成继续。",
    warning7: "- 当使用正则表达式条件时，它将比任何其他条件先处理。",
    selfDistribution5: "随机的",
    selfDistribution6: "均衡",
    emoji: "表情符号",
    chatbotBlock: {
      chatbotBlocked: "聊天机器人已阻止",
      chatbotActive: "聊天机器人激活"
    },
    googleAgenda: {
      selectConfigHint: "选择 Google 日历配置",
      dateType: "日期类型",
      dateTypeHint: "选择用于计划的日期类型",
      daysFromInteraction: "交互后的天数",
      daysRequired: "天数是必填项",
      daysFromInteractionHint: "输入交互后的天数以进行计划",
      eventTitleHint: "输入事件标题",
      startDateTimeHint: "输入事件开始日期和时间",
      endDateTimeHint: "输入事件结束日期和时间",
      descriptionHint: "输入事件描述",
      locationHint: "输入事件位置",
      sendNotifications: "发送通知",
      reminderBefore: "提醒时间",
      reminderMinutes: "分钟前",
      reminderMinutesHint: "输入事件前的分钟数以发送通知",
      today: "今天",
      tomorrow: "明天",
      days_from_interaction: "交互后的天数",
      custom: "自定义日期"
    },
    opportunity: {
      contactAutoFill: "联系人将自动从工单中填写",
      today: "今天",
      tomorrow: "明天",
      days_from_interaction: "交互后的天数",
      custom: "自定义日期",
      open: "打开",
      win: "赢得",
      lose: "失去",
      dateTypeHint: "选择用于计划的日期类型",
      dateType: "日期类型"
    },
    schedule: {
      scheduleDateRequired: "日期是必填项",
      scheduleType: "计划类型",
      scheduleTypeHint: "选择计划类型",
      scheduleDate: "自定义日期和时间",
      scheduleDateHint: "输入自定义的日期和时间以进行计划",
      uploadImage: "上传图片",
      selectImage: "选择图片",
      deleteImage: "删除图片",
      message: "消息",
      messageHint: "输入计划消息",
      sendSignature: "发送签名",
      includeContactInfo: "包含联系信息",
      advancedSettings: "高级设置",
      delayBeforeSend: "发送前延迟",
      delayBeforeSendHint: "输入延迟值（秒）",
      customSchedule: "自定义日期",
      thirtyMinutes: "30 分钟",
      oneHour: "1 小时",
      tomorrow: "明天",
      nextWeek: "下周",
      nextMonth: "下个月"
    },
    webhook: {
      url: "Webhook URL",
      urlPlaceholder: "输入 Webhook URL",
      urlHint: "输入 Webhook URL",
      httpMethod: "HTTP 方法",
      httpMethodHint: "选择 Webhook 的 HTTP 方法",
      headers: "标头",
      headerKey: "键",
      headerKeyPlaceholder: "输入标头键",
      headerValue: "值",
      headerValuePlaceholder: "输入标头值",
      addHeader: "添加标头",
      body: "正文",
      bodyType: "正文类型",
      bodyContent: "正文内容",
      bodyContentPlaceholder: "输入正文内容",
      bodyContentHint: "输入正文内容",
      formDataPlaceholder: "输入表单内容",
      formDataHint: "输入表单内容",
      testWebhook: "测试 Webhook",
      testWebhookHint: "测试 Webhook 以验证其是否正常工作。",
      testSuccess: "Webhook 测试成功！",
      testError: "测试 Webhook 时出错",
      responseDetails: "响应详情",
      advancedSettings: "高级设置",
      timeout: "超时",
      timeoutHint: "输入超时值（秒）",
      retryAttempts: "重试次数",
      retryAttemptsHint: "输入重试次数",
      retryDelay: "重试延迟",
      retryDelayHint: "输入延迟值（秒）",
      jsonBody: "JSON 正文",
      formBody: "表单正文",
      testSuccessDetails: "服务器已收到响应（CORS 阻止浏览器读取响应）",
      testErrorCors: "网络或 CORS 错误。请检查 URL 是否可访问。",
      testErrorCorsDetails: "错误: {error}\n\n提示: Webhook 可能正常工作，但浏览器因 CORS 阻止。请在 webhook.site 检查请求是否到达。",
      testErrorUnknown: "未知错误"
    },
    ReasonsField: "原因",
    SmsField: "短信",
    VapiField: "VAPI",
    NotesField: "备注",
    clear: "清除",
    phoneNumberId: "电话号码",
    assistantId: "助手",
    sms: {
      service: "服务",
      message: "消息",
      messagePlaceholder: "请输入短信内容"
    },
    notes: {
      note: "备注",
      notePlaceholder: "请输入备注"
    },
    buttons: {
      addStep: "新舞台",
      saveFlow: "保存流",
      reorder: "重新排序",
      addInteraction: {
        reasons: "原因",
        sms: "短信",
        vapi: "VAPI",
        notes: "笔记",
        chatbotBlock: "阻止聊天机器人",
        opportunity: "机会",
        googleAgenda: "Google 日历",
        schedule: "日程",
        webhookAll: "Webhooks",
        message: "发送消息",
        media: "发送文档、视频、音频和其他文件。",
        typebot: "添加 Typebot",
        chatgpt: "添加 ChatGPT",
        delay: "添加延迟",
        tag: "添加标签",
        kanban: "添加看板",
        webhook: "添加 Webhook (GET)",
        newFlow: "开始新流程"
      },
      addCondition: "全新状态"
    },
    optionsVariableType: {
      text: "文本",
      number: "数字"
    },
    labels: {
      variableType: "变量类型",
      captureVariable: "捕获响应作为变量",
      comparisonType: "比较类型",
      timesAttempted: "尝试次数",
      flow: "流程配置",
      stepName: "姓名",
      interactions: "互动",
      conditions: "状况",
      if: "如果",
      responses: "答案",
      routeTo: "路由",
      step: "阶段",
      queue: "队列",
      user: "用户",
      closeTicket: "结束服务",
      channel: "频道",
      time: "时间（分钟）",
      parameters: "参数",
      keyword: "触发词",
      maxRetries: "最大尝试次数",
      autoDistribute: "自助分销服务",
      outOfHours: "营业时间以外",
      firstInteraction: "第一次互动",
      endMessage: "结束语",
      welcomeMessage: "问候语",
      noResponse: "无回应"
    },
    optionsComparisonType: {
      equals: "等于",
      contains: "包含",
      startsWith: "开始于",
      endsWith: "结束于",
      regex: "正则表达式 (Regex)"
    },   
    placeholders: {
      typeMessage: "在此处输入您的消息...",
      keyword: "输入单词",
      feedbackMessage: "反馈信息",
      farewellMessage: "结束语"
    },
    hints: {
      captureVariable: "输入变量键",
      typeEqual: "输入用于比较的精确文本。",
      typeContains: "输入必须包含在响应中的文本。",
      typeStartsWith: "输入响应必须以该文本开头的文本。",
      typeEndsWith: "输入响应必须以该文本结尾的文本。",
      typeRegex: "输入有效的正则表达式。",
      queueRedirect: "当客户端发送定义的关键字时，将触发此交互。",
      outHours: "如果客户在营业时间以外发送消息。",
      autoDistribute: "将从队列中选择一个用户进行服务。",
      typeValue: "输入值并按回车键"
    },
    options: {
      routeTo: {
        queue: "队列",
        user: "用户",
        close: "关闭",
        channel: "渠道"
      }
    }
  },
  monitor: {
    monitor: "监视器",
    title: "系统监控",
    usage: "使用",
    cores: "核心",
    memory: "记忆",
    total: "全部的",
    free: "自由的",
    used: "用过的",
    usedPercentage: "使用百分比",
    uptime: "正常运行时间"
  },
  common: {
    required: "必填",
    downloadSuccess: "下载成功！",
    downloadError: "下载文件时出错",
    duplicate: "复制",
    enableChatgptAllBanner: "注意：为所有渠道配置凭证。启用此设置后，任何渠道中创建的所有新票证都将自动接收 ChatGPT 集成。此设置将影响所有服务渠道。",
    enableClaudeAllBanner: "注意：为所有渠道配置凭证。启用此设置后，任何渠道中创建的所有新票证都将自动接收 Claude 集成。此设置将影响所有服务渠道。",
    enableDeepseekAllBanner: "注意：为所有渠道配置凭证。启用此设置后，任何渠道中创建的所有新票证都将自动接收 Deepseek 集成。此设置将影响所有服务渠道。",
    enableDialogflowAllBanner: "注意：为所有渠道配置凭证。启用此设置后，任何渠道中创建的所有新票证都将自动接收 Dialogflow 集成。此设置将影响所有服务渠道。",
    enableDifyAllBanner: "注意：为所有渠道配置凭证。启用此设置后，任何渠道中创建的所有新票证都将自动接收 Dify 集成。此设置将影响所有服务渠道。",
    enableGeminiAllBanner: "注意：为所有渠道配置凭证。启用此设置后，任何渠道中创建的所有新票证都将自动接收 Gemini 集成。此设置将影响所有服务渠道。",
    enableGrokAllBanner: "注意：为所有渠道配置凭证。启用此设置后，任何渠道中创建的所有新票证都将自动接收 Grok 集成。此设置将影响所有服务渠道。",
    enableLmAllBanner: "注意：为所有渠道配置凭证。启用此设置后，任何渠道中创建的所有新票证都将自动接收 LM 集成。此设置将影响所有服务渠道。",
    enableN8NAllBanner: "注意：为所有渠道配置凭证。启用此设置后，任何渠道中创建的所有新票证都将自动接收 N8N 集成。此设置将影响所有服务渠道。",
    enableOllamaAllBanner: "注意：为所有渠道配置凭证。启用此设置后，任何渠道中创建的所有新票证都将自动接收 Ollama 集成。此设置将影响所有服务渠道。",
    enableQwenAllBanner: "注意：为所有渠道配置凭证。启用此设置后，任何渠道中创建的所有新票证都将自动接收 Qwen 集成。此设置将影响所有服务渠道。",
    enableTypebotAllBanner: "注意：为所有渠道配置凭证。启用此设置后，任何渠道中创建的所有新票证都将自动接收 Typebot 集成。此设置将影响所有服务渠道。",
    espiarAtendimento: "间谍服务",
    atualizar: "更新",
    dadosAtualizados: "数据更新成功！",
    erroAtualizacao: "更新数据错误！",
    funil: "漏斗",
    accessDenied: "拒绝访问！您无权访问此页面。",
    loadMoreTickets: "正在搜索票证...如有必要，请单击“加载更多票证”旁边的按钮一次或多次以列出较旧的票证。",
    oldMessage: "旧消息，向上滚动加载历史记录...",
    rollTop: "向上滚动，尝试查找消息...",
    messageNotFound: "未找到消息！",
    fullscreen: "全屏",
    info: "信息",
    addInfo: "添加信息",
    hours: "小时",
    minutes: "分钟",
    confirmDeleteElement: "您确实要删除元素 ({idx}) 吗？",
    confirmDeleteCondition: "您确实要删除该条件 ({idx}) 吗？",
    invalidDate: "无效日期",
    pay: "发票",
    version: "版本",
    resume: "总结",
    readMore: "阅读更多",
    redefineError: "重置密码错误",
    recoverSucess: "密码重置成功！",
    recoverError: "请求重置密码时出错",
    recoverSend: "密码恢复电子邮件发送成功！",
    limitExceed: "登录尝试次数过多。 1 分钟后重试",
    loginSuccess: "登录成功！",
    busyLine: "线路繁忙，请稍后重试或升级",
    system: "系统",
    newClientPending: "新客户待定",
    client: "顾客： ",
    loading: "加载中...",
    errorOccurred: "发生错误",
    errorFetchingData: "获取数据时出错",
    noData: "没有数据",
    notInformed: "未获悉",
    resolve: "解决",
    register: "登记",
    unknown: "未知",
    message: "信息",
    edited: "已编辑",
    sync: "同步",
    reply: "回应",
    forward: "转发",
    markToForward: "转发多个（勾选）",
    react: "反应",
    edit: "编辑",
    delete2: "删除",
    download: "下去",
    download2: "下去",
    contact: "接触",
    typeMessage: "输入您的消息...",
    emoji: "表情符号",
    types: "类型",
    ok: "好的",
    cancel: "取消",
    start: "开始",
    close: "关闭",
    confirm: "确认",
    send: "发送",
    updated: "已更新！",
    users: "用户",
    dateHourFormat: "日/月/年 HH:mm:ss",
    dateFormat: "日/月/年",
    active: "积极的",
    actions: "行动",
    description: "描述",
    import: "进口",
    save: "节省",
    add: "添加",
    delete: "删除",
    no: "不",
    yes: "是的",
    out: "外出",
    continue: "继续",
    attention: "注意力！！",
    search: "定位...",
    lang: "pt-BR",
    variables: {
      name: "姓名",
      email: "电子邮件（如有）",
      phoneNumber: "电话",
      kanban: "看板（如果有）",
      firstName: "名字（如有）",
      lastName: "姓氏（如有）",
      businessName: "公司（如有）"
    },
    notifications: {
      success: "配置已更改！",
      error: "發生錯誤。"
    },
    status: {
      pending: "待办的",
      received: "已收到",
      overdue: "逾期",
      unknown: "状态未知"
    }
  },
  funil: {
    createEvent: "创建事件",
    selectCalendar: "选择日历",
    noConfig: "没有可用的配置",
    createGoogleCalendarEvent: "在 Google 日历中创建事件",
    viewGoogleCalendar: "查看 Google 日历事件",
    googleCalendarEvents: "Google 日历事件",
    noCalendarConfig: "没有可用的配置",
    editCalendarEvent: "编辑事件",
    openCalendarEvent: "在 Google 日历中打开",
    eventTitle: "事件标题",
    eventTitleRequired: "标题是必填项",
    eventStartDate: "开始日期",
    eventStatus: "状态",
    eventStartDateRequired: "开始日期是必填项",
    eventEndDate: "结束日期",
    eventEndDateRequired: "结束日期是必填项",
    eventDescription: "描述",
    eventLocation: "地点",
    eventAttendees: "参与者（用逗号分隔的邮箱）",
    eventAttendeesHint: "example@@email.com, other@@email.com",
    updateEvent: "更新事件",
    cancelUpdateEvent: "取消",
    eventActions: "操作",
    eventUpdatedSuccess: "事件更新成功！",
    selectCalendarConfig: "请选择一个配置以获取事件。",
    configNotFound: "未找到所选配置",
    configureGoogleCalendar: "请先配置 Google 日历凭据",
    eventError: "加载事件时出错",
    calendarConfigError: "加载 Google 日历配置时出错",
    todos: "全部",
    valorMin: "最小值",
    valorMax: "最大值",
    itemsPerPage: "每页项目数",
    filter: "筛选",
    oportunidadeAtualizada: "商机已成功更新",
    oportunidadeCriada: "成功创造机会",
    erroSalvar: "错误保存机会",
    erroEnvioEmail: "发送电子邮件时出错",
    emailDestinatario: "收件人邮箱",
    camposObrigatorios: "必填字段",
    semEmailContato: "没有联系邮箱",
    mensagemEmail: "电子邮件",
    assuntoEmail: "电子邮件主题",
    enviarEmail: "发送电子邮件",
    emailError: "发送电子邮件时出错",
    emailErrorDetails: "无法确定错误",
    dataAnteriorNaoPermitida: "日期不能早于当前日期",
    nome: "姓名",
    numero: "数字",
    email: "电子邮件",
    dataCriacao: "创建日期",
    novaOportunidade: "新机遇",
    calendar: "日历",
    buscarPorTermoPlaceholder: "输入要搜索的词条",
    buscarPorTermo: "按术语搜索",
    dataInicio: "开始日期",
    dataFim: "结束日期",
    limiteRegistros: "记录限制",
    registrosPorPagina: "每页记录数",
    total: "全部的",
    semDescricao: "没有描述",
    etapas: "阶段",
    contato: "接触",
    noventaDiasLabel: "过去 90 天",
    filterByStage: "按步骤过滤",
    filterByResponsible: "按责任过滤",
    filterByPipeline: "按漏斗过滤",
    aberto: "打开",
    ganho: "获得",
    perdido: "丢失的",
    export: "出口",
    exportCSV: "导出 CSV",
    oportunidadesValue: "机会",
    pipelinesValue: "管道",
    etapasValue: "步骤",
    noDataToExport: "没有可导出的数据",
    filterByStatus: "按状态过滤",
    filterByPeriod: "按时间段过滤",
    fitlerByResponsible: "按责任过滤",
    oportunidadeStatus: "机会状态",
    oportunidadePorResponsavel: "负责任的机会",
    evolucaoDasOportunidades: "机遇的演变",
    ticketMedio: "平均票价",
    todosLabel: "全部",
    abertosLabel: "打开",
    ganhosLabel: "收益",
    perdidosLabel: "丢失的",
    seteDiasLabel: "过去 7 天",
    trintaDiasLabel: "过去 30 天",
    noventeDiasLabel: "过去 90 天",
    noResponsible: "不负责",
    oportunidades: "机会",
    criado: "创建企业",
    emAberto: "开业",
    negocioGanho: "企业获胜",
    negocioPerdido: "生意受损",
    taxaNegociosGanhos: "赢取商业利率",
    dashBoard: "控制面板",
    pipelines: "漏斗",
    kanban: "看板",
    ultimaEtapa: "这是流程的最后一步",
    deletarOportunidade: "您确定要删除此机会吗？",
    oportunidadeDeletada: "商机已成功删除",
    erroAoDeletar: "删除机会时出错",
    atencao: "注意力",
    nao: "不",
    sim: "是的",
    cancelar: "取消",
    salvar: "节省",
    fechar: "关闭",
    adicionar: "添加",
    editar: "编辑",
    deletar: "删除",
    oportunidadeVencendo: "赢得机遇",
    venceEm: "获胜",
    dias: " 天）",
    verDetalhes: "查看详情",
    semMovimentacao: "没有动静",
    estaHa: "有没有",
    diasSemMovimentacao: "沒有動作的日子",
    atualizar: "更新",
    valorAlto: "高价值",
    comValorDe: "价值为 R$ ",
    etapaEstagnada: "停滞阶段",
    diasNaEtapa: "舞台上的日子",
    avancarEtapa: "下一步",
    semResponsavel: "不负责",
    reponsavelAlerta: "没有指定负责人",
    designar: "指定",
    fechamentoPrevisto: "结束语",
    dataProxima: "截止日期即将到来！",
    criadoEm: "创建于",
    detalhesOportunidade: "机会详情",
    pipeline: "漏斗",
    etapa: "阶段",
    status: "地位",
    valor: "价值",
    valoresData: "价值观和日期",
    previsao: "收盘预测",
    ultimaUpdate: "最后更新",
    responsaveis: "负责任的",
    basicas: "基本信息",
    lead: "带领",
    responsavel: "负责任的",
    descricao: "描述",
    produtos: "产品",
    historicoAtividades: "活动历史记录",
    valorMinimo: "最小值",
    valorMaximo: "最大值",
    limparFiltros: "清除筛选器",
    esteMes: "本月",
    mesAnterior: "上个月",
    ultimos7dias: "过去 7 天",
    ultimos30dias: "过去 30 天",
    ultimos90dias: "过去 90 天",
    hoje: "今天",
    valorDesc: "价值（从高到低）",
    valorAsc: "值（从低到高）",
    criacaoDesc: "创作（从最新到最旧）",
    criacaoAsc: "创作（从最旧到最新）",
    previsaoFechamento: "收盘预测",
    editarOportunidade: "编辑机会",
    criarOportunidade: "创造机会",
    pipeEtapa: "漏斗和阶段",
    selecioneData: "选择预计截止日期",
    dataObrigatoria: "日期为必填项",
    dataFutura: "日期必须是将来的日期",
    loadError: "加载所需数据时出错",
    contactError: "加载联系人时出错",
    editarPipe: "编辑漏斗",
    novoPipe: "新漏斗",
    nomePipe: "漏斗名称",
    campoObrigatorio: "必填字段",
    acoes: "行动",
    excluirPipeline: "您确定要删除此渠道吗？",
    funilDeletado: "渠道删除成功",
    erroAoDeletarFunil: "删除漏斗时出错",
    pipeTitle: "漏斗"
  },
  asteriskWebphone: {
    conected: "已连接",
    setNumber: "输入号码",
    callReceived: "呼叫已接收",
    disconnectedWebphone: "Webphone已断开",
    calling: "正在呼叫...",
    callError: "呼叫开始时出错",
    callReceivedError: "呼叫接收时出错",
    callEnded: "呼叫已结束",
    callEndedError: "呼叫结束时出错",
    callReceived: "呼叫已接收",
  },
  configuracaoTutoriais: {
    title: '教程',
    create: '创建教程',
    description: '描述',
    link: '链接',
    thumbnail: '缩略图',
    isActive: '启用',
    edit: '编辑',
    deleteConfirmation: '您确定要删除此教程吗？',
    tutorialDeleted: '教程已成功删除',
    columns: {
      title: '标题',
      link: '链接',
      isActive: '启用',
      acoes: '操作',
      thumbnail: '缩略图',
      description: '描述',
      actions: '操作',
      edit: '编辑',
      delete: '删除',
      cancel: '取消',
      id: '编号',
    },
    notifications: {
      duplicated: '教程复制成功',
      errorDelete: '删除教程时出错',
      errorDuplicate: '复制教程时出错',
    }
  },
  funilacao: {
    fluxoSalvoComSucesso: '流程保存成功',
    tipoAcaoFluxo: '流程',
    erroSalvarFluxo: '保存流程时出错',
    configurarFluxo: '配置流程',
    configurarAdicaoCarteira: '配置添加钱包',
    configurarAdicaoTag: '配置添加标签',
    configurarMudancaStatus: '配置状态变更',
    configurarMudancaEtapa: '配置阶段变更',
    configurarMensagem: '配置消息',
    selecionarAcao: '选择操作',
    acoesDoFluxo: '流程操作',
    adicioneAcoes: '为流程添加操作',
    adicionarAcao: '添加操作',
    moverParaBaixo: '下移',
    moverParaCima: '上移',
    diasAposInicio: "{dias} 天",
    configurarAcao: '配置操作',
    selecionePipelineEtapa: '选择流程和阶段',
    novoFluxo: '新流程',
    editarFluxo: '编辑流程',
    editorFluxo: '流程编辑器',
    acoesDisponiveis: '可用操作',
    fluxo: '流程',
    verLogs: '查看日志',
    logAcao: '操作日志',
    contato: '联系人',
    numero: '号码',
    email: '电子邮件',
    data: '日期',
    oportunidade: '机会',
    status: '状态',
    mensagemErro: '错误信息',
    erroCarregarLogs: '加载日志时出错',
    acao: '操作',
    pipeline: '流程',
    etapa: '阶段',
    tipoAcao: '操作类型',
    mensagem: '消息',
    etapaDestino: '目标阶段',
    statusDestino: '目标状态',
    tag: '标签',
    carteira: '钱包',
    diasParaDisparar: '触发天数',
    tipoAcaoMensagem: '发送消息',
    tipoAcaoMudarEtapa: '更改阶段',
    tipoAcaoMudarStatus: '更改状态',
    tipoAcaoAdicionarTag: '添加标签',
    tipoAcaoAdicionarCarteira: '添加钱包',
    aberto: '开启',
    ganho: '赢得',
    perdido: '丢失',
    novo: '新建',
    pesquisar: '搜索',
    ativo: '启用',
    nome: '名称',
    pipeline: '流程',
    etapa: '阶段',
    status: '状态',
    valor: '金额',
    valoresData: '金额和日期',
    previsao: '预计完成时间',
    salvar: '保存',
    cancelar: '取消',
    descricao: '描述',
    whatsapp: '连接',
    pesquisar: '搜索',
    novo: '新建',
    acoes: '操作',
    erroCarregarDados: '加载数据出错',
    required: '必填项',
    editar: '编辑',
    salvoComSucesso: '保存成功',
    excluir: '删除',
    alteradoComSucesso: '修改成功',
    confirmarExclusao: '确定要删除此操作吗？',
    confirmar: '确认',
    excluidoComSucesso: '删除成功',
    erroExcluir: '删除操作时出错',
    erroSalvar: '保存操作时出错',
    erroAtualizar: '更新操作时出错',
    erroCarregarEtiquetas: '加载标签出错',
    erroCarregarCarteiras: '加载钱包出错',
    erroCarregarWhatsapps: '加载 WhatsApp 连接出错',
  },
  vapi: {
    assistants: "助手",
    phones: "电话号码",
    createAccountInstruction: "在Vapi创建一个账户，并生成您的令牌以使用与Vapi的集成",
    tokenLabel: "令牌",
    tokenTooltip: "Vapi",
    tooltip: "在Vapi创建一个账户，并生成您的令牌以使用与Vapi的集成。",
    testCall: "进行测试通话",
    selectAssistant: "选择助手",
    selectPhoneNumber: "选择电话号码",
    customerNumber: "客户号码",
    makeCall: "进行通话",
    cancel: "取消",
    success: "通话成功！",
    call: "通话",
  },
  rewriteIa: {
    title: '使用ChatGPT重写',
    estilos: '重写风格',
    pro: '专业',
    prodesc: '正式且商务的语气',
    simp: '友好',
    simpdesc: '友好且温暖的语气',
    marketing: '营销',
    marketingdesc: '具有说服力且吸引人的语气',
    ortografia: '拼写',
    ortografiadesc: '仅拼写纠正',
    caracteres: '字符',
    warning1: '请输入要重写的内容',
    warning2: 'ChatGPT的API密钥未配置',
    warning3: '文本已按该风格重写',
    warning4: '已撤销重写',
    desfazer: '撤销',
    error1: '重写文本时出错。请重试'
  },
  dashStyles: {
    title: '自定义仪表板',
    tema: '仪表板主题',
    tipoGrafico: '图表类型',
    tooltip: '自定义显示的图表类型：',
    show: '显示以下面板：',
    defaultLabel: '默认',
    defaultValue: '默认',
    pizzaLabel: '饼图',
    barLabel: '柱状图',
    lineLabel: '折线图',
    areaLabel: '面积图',
    donutLabel: '圆环图',
    radarLabel: '雷达图',
    queueLabel: '按队列服务',
    userLabel: '按用户服务',
    statusLabel: '按状态服务',
    channelLabel: '按通道服务（连接）',
    channelNameLabel: '按通道服务（名称）',
    reasonsLabel: '按需求服务',
    users: '用户',
    atendimento: '服务',
    demandas: '需求',
    closed: '已关闭',
    open: '已开启',
    pending: '待处理',
    schedule: '已安排',
    undefined: '未定义',
    channels: '通道',
    classic: '经典',
    modern: '现代',
    nature: '自然',
    elegant: '优雅',
    vibrant: '鲜明',
    minimalist: '极简',
    corporative: '企业',
    default: '默认',
    performanceCardsLabel: '绩效卡片',
    performanceTableLabel: '绩效表格',
  },
  ticketCompartilhado: {
    convites: '邀请',
    convite: '邀请',
    conviteDeletado: '邀请已成功删除',
    conviteDeletadoErro: '删除邀请时出错',
    meusConviteCompartilhados: '我共享的邀请',
    carregandoConvites: '正在加载邀请...',
    nenhumConviteEncontrado: '未找到任何邀请',
    voceNaoPossuiConvitesAtivos: '您没有任何有效的共享邀请。',
    compartilhadoEm: '共享于',
    usuariosComAcesso: '有权限的用户',
    criadoPor: '创建者',
    voce: '您',
    outroUsuario: '其他用户',
    abrirNaMesmaTela: '在同一窗口中打开',
    deletarConvite: '删除邀请',
    erroAoCarregarConvites: '加载邀请时出错',
    linkCopiadoParaAreaDeTransferencia: '链接已复制到剪贴板',
    naoFoiPossivelCopiarLink: '无法复制链接',
    confirmarExclusa: '确认删除',
    temCertezaQueDesejaDeletarOConviteDoTicket: '您确定要删除工单 #{ticketId} 的邀请吗？',
    conviteDeletadoComSucesso: '邀请已成功删除！',
    erroAoDeletarConvite: '删除邀请时出错',
    confirmarExclusao: '您确定要删除此邀请吗？',
    compartilharTicket: '共享工单',
    editarCompartilhamento: '编辑共享',
    editeOsUsuariosQueTeraoAcessoAEsteTicket: '编辑可访问此工单的用户',
    selecioneOsUsuariosQueTeraoAcessoAEsteTicket: '请选择可访问此工单的用户',
    atualizar: '更新',
    compartilhar: '共享',
    erroAoVerificarConviteExistente: '检查现有邀请时出错',
    erroAoCarregarUsuarios: '加载用户时出错',
    selecionePeloMenosUmUsuarioParaCompartilhar: '请选择至少一个要共享的用户',
    conviteAtualizadoCom: '邀请已更新，共有 {length} 位用户',
    ticketCompartilhadoCom: '工单已与 {length} 位用户共享',
    erroAoCompartilharTicket: '共享工单时出错',
    update: '更新',
  },
  backup: {
    title: "数据中心",
    backupActions: "数据导出",
    individualBackup: "单个导出",
    allTenantsConfig: "所有租户的导出配置",
    tenantConfig: "每个租户的导出配置",
    oldBackupsCleanup: "清理旧数据",
    backupResults: "导出结果",
    availableBackups: "可用数据",
    totalBackups: "导出总数",
    totalSize: "总大小",
    lastBackup: "上次导出",
    processedTenants: "已处理的导出",
    backupAllTenants: "导出所有租户",
    updateStatus: "更新状态",
    makeBackup: "导出数据",
    updateConfigs: "更新配置",
    searchTenant: "搜索租户",
    newConfig: "新配置",
    recreateDefaultConfig: "重新创建默认配置",
    saveConfig: "保存配置",
    cancel: "取消",
    close: "关闭",
    confirmRestore: "确认恢复",
    confirmGeneralCleanup: "确认清理",
    cleanTenantBackups: "清理租户旧数据",
    cleanAllTenantsBackups: "清理所有租户的旧数据",
    selectTenant: "选择租户",
    selectTenantForConfig: "选择租户进行配置",
    selectTenantForCleanup: "选择租户进行清理",
    viewAllTenantsConfig: "查看所有租户的导出配置",
    removeOldBackups: "根据每个租户的保留策略删除旧数据",
    tenantConfigInfo: "租户配置：",
    noConfigFound: "未找到配置",
    withoutDescription: "无描述",
    createdIn: "创建于：",
    editConfig: "编辑配置",
    newConfigTitle: "新配置",
    storage: "存储",
    general: "常规",
    advanced: "高级",
    storageType: "存储类型",
    storagePath: "存储路径",
    retentionDays: "保留天数",
    compression: "压缩",
    description: "描述",
    configDescription: "配置描述",
    encryption: "加密",
    encryptionPassword: "加密密码",
    bucket: "桶",
    region: "区域",
    accessKeyId: "访问密钥 ID",
    secretAccessKey: "密钥",
    host: "主机",
    port: "端口",
    username: "用户名",
    password: "密码",
    path: "路径",
    active: "启用",
    inactive: "停用",
    success: "成功",
    failure: "失败",
    complete: "完成",
    partial: "部分",
    yes: "是",
    no: "否",
    edit: "编辑",
    recreateDefault: "重新创建默认",
    delete: "删除",
    viewDetails: "查看详情",
    downloadBackup: "下载数据",
    deleteBackup: "删除数据",
    confirmDeleteBackup: "确认删除",
    confirmDeleteBackupMessage: "确定要删除此导出？此操作无法撤销。",
    backupDeleted: "导出已成功删除",
    errorDeletingBackup: "删除数据时出错",
    confirmDeleteBackupTitle: "确认删除数据",
    id: "ID",
    tenant: "租户",
    tenantId: "租户 ID",
    backupName: "导出名称",
    size: "大小",
    dbSize: "数据库大小",
    filesSize: "文件大小",
    totalSize: "总大小",
    duration: "持续时间",
    type: "类型",
    date: "日期",
    actions: "操作",
    createdAt: "创建时间",
    status: "状态",
    backupDetails: "导出详情",
    name: "名称",
    database: "数据库",
    files: "文件",
    dbSizeLabel: "数据库大小：",
    filesSizeLabel: "文件大小：",
    totalSizeLabel: "总大小：",
    dateLabel: "日期：",
    errors: "错误：",
    restoreBackup: "恢复数据",
    restoreWarning: "⚠️ 注意：此操作将覆盖当前租户数据，且无法撤销。",
    confirmGeneralCleanupTitle: "确认清理",
    action: "操作：",
    criteria: "条件：",
    cleanupAction: "清理所有租户的旧数据",
    cleanupCriteria: "超过配置的保留期限的数据",
    cleanupWarning: "⚠️ 警告：此操作将永久删除所有租户的旧数据，无法恢复，可能导致历史数据丢失。",
    cleanupAllWarning: "⚠️ 此操作将清理所有租户的旧数据",
    allBackupsCompleted: "所有租户的导出已完成",
    allBackupsExecuted: "所有租户的导出已完成",
    singleBackupExecuted: "租户导出已完成",
    tenantBackupCompleted: "租户导出已完成",
    configSaved: "配置已成功保存",
    configDeleted: "配置已成功删除",
    defaultConfigRecreated: "默认配置已重新创建",
    restoreCompleted: "恢复完成",
    tenantBackupsCleaned: "租户的旧数据已成功清理",
    oldBackupsCleaned: "租户的旧数据已成功清理",
    allTenantsBackupsCleaned: "所有租户的旧数据已成功清理",
    allOldBackupsCleaned: "所有租户的旧数据已成功清理",
    backupDownloaded: "数据已成功下载！",
    tenantsWithSuccess: "成功的租户",
    errorLoadingInitialData: "加载初始数据时出错",
    errorLoadingStatus: "加载状态时出错",
    errorLoadingTenants: "加载租户时出错",
    errorLoadingBackups: "加载数据时出错",
    errorLoadingResults: "加载导出结果时出错",
    errorLoadingAllConfigs: "加载所有租户的配置时出错",
    errorLoadingTenantConfigs: "加载租户配置时出错",
    errorExecutingBackup: "执行导出时出错",
    errorExecutingAllBackups: "执行导出时出错",
    errorExecutingTenantBackup: "执行租户导出时出错",
    errorExecutingSingleBackup: "执行租户导出时出错",
    errorSavingConfig: "保存配置时出错",
    errorDeletingConfig: "删除配置时出错",
    errorRecreatingDefaultConfig: "重新创建默认配置时出错",
    errorRestoringBackup: "恢复数据时出错",
    errorCleaningTenantBackups: "清理租户数据时出错",
    errorCleaningOldBackups: "清理租户数据时出错",
    errorCleaningAllTenantsBackups: "清理所有租户数据时出错",
    errorCleaningAllBackups: "清理所有租户数据时出错",
    errorDownloadingBackup: "下载数据时出错",
    selectTenantToConfigure: "请选择要配置的租户",
    selectTenantToClean: "请选择要清理数据的租户",
    selectTenantToCleanBackups: "请选择要清理数据的租户",
    selectTenantToRecreate: "请选择要重新创建默认配置的租户",
    selectTenantToRecreateDefaultConfig: "请选择要重新创建默认配置的租户",
    invalidConfig: "无效配置",
    confirmDelete: "确认删除",
    confirmDeleteConfigTitle: "确认删除",
    confirmDeleteMessage: "确定要删除此配置吗？",
    confirmDeleteConfigMessage: "确定要删除此配置吗？",
    zeroBytes: "0 字节",
    na: "无",
    tenantPrefix: "租户 ",
    backupInfoTitle: "导出信息",
    includedModels: "包含的模型",
    excludedModels: "排除的模型",
    databaseModelsInfo: "数据库模型",
    includedModelsTitle: "导出中包含的模型",
    excludedModelsTitle: "导出中排除的模型",
    includedModelsDescription: "这些模型将包含在数据库导出中",
    excludedModelsDescription: "这些模型不会包含在数据库导出中",
    backupScope: "导出范围",
    backupScopeDescription: "仅包含带有租户ID的特定数据，排除系统数据、临时日志和内部配置。",
    showDetails: "显示详情",
    hideDetails: "隐藏详情",
    backupAllTenantsTooltip: "导出所有租户",
    backupAllTenantsDescription: "导出系统中所有活动租户的数据",
    singleBackupTooltip: "单个导出",
    singleBackupDescription: "导出特定租户的数据",
    modelsIncluded: "包含的模型",
    modelsExcluded: "排除的模型",
    models: "模型",
    updateStatusDescription: "更新导出的统计信息和状态",
    cleanupInfoTitle: "数据清理",
    cleanupInfoDescription: "根据配置的保留策略删除旧数据",
    cleanupScope: "清理范围",
    cleanupScopeDescription: "仅删除旧的导出文件，不影响数据库数据或配置"
  },
  masterkey: {
    masterkeyOption: "使用 MasterKey"
  },
  configuracaoMetaPanel: {
    novos: {
      configureWebhook: "配置Webhook",
      configureSIP: "配置SIP",
      registerPhone: "在WABA中注册电话",
      configureWebhookDescription: "配置回调URL以接收来自WhatsApp Business API的事件",
      callbackUrl: "回调URL",
      callbackUrlRequired: "回调URL为必填项",
      verifyToken: "验证令牌",
      metaToken: "租户Meta令牌",
      metaTokenHint: "用于验证请求真实性的令牌",
      metaTokenRequired: "验证令牌为必填项",
      overrideWebhook: "覆盖Webhook",
      configureSIPDescription: "配置SIP服务器以通过WhatsApp Business API接收语音呼叫",
      hostnameSIP: "SIP服务器主机名",
      hostnameSIPHint: "SIP服务器主机名（例如：asterisk.exemplo.com.br）",
      hostnameSIPRequired: "SIP服务器主机名为必填项",
      hostnameSIPInvalid: "无效的SIP服务器主机名",
      hostnameSIPPlaceholder: "例如：asterisk.exemplo.com.br",
      portSIP: "SIP服务器端口",
      portSIPHint: "SIP服务器端口 (1-65535)",
      portSIPRequired: "SIP服务器端口为必填项",
      portSIPInvalid: "无效的SIP服务器端口",
      portSIPPlaceholder: "5061",
      important: "重要",
      configureSIPDescription2: "此配置将启用通过WhatsApp Business API进行的语音呼叫。请确保SIP服务器已正确配置并可访问。",
      fillRequiredFields: "请填写所有必填字段",
      portSIPInvalidMessage: "无效端口。必须是1到65535之间的数字",
      hostnameSIPInvalidMessage: "无效的主机名",
      SIPConfiguredSuccess: "SIP配置成功！",
      SIPConfiguredError: "SIP配置错误"
    },    
    profile: {
      updateProfile: "更新资料",
      profile: "WhatsApp 商业资料",
      about: "关于",
      address: "地址",
      description: "描述",
      email: "电子邮件",
      vertical: "行业",
      websites: "网站",
      loadingProfile: "正在加载当前资料...",
      configureProfile: "配置资料",
      configureProfileDescription: "配置 WhatsApp 商业资料信息",
      reloadProfile: "重新加载资料",
      aboutPlaceholder: "简要描述您的业务",
      aboutHint: "最多 512 个字符",
      addressPlaceholder: "完整的业务地址",
      addressHint: "营业地点的物理地址",
      descriptionPlaceholder: "业务的详细描述",
      descriptionHint: "完整的服务或产品描述",
      emailPlaceholder: "contact＠company.com",
      emailHint: "业务联系电子邮件",
      verticalPlaceholder: "选择行业",
      verticalHint: "业务的主要类别",
      websitesPlaceholder: "https://www.company.com",
      websitesHint: "业务网站的URL（用逗号分隔）",
      cancel: "取消",
      saveProfile: "保存资料",
      profileLoadError: "电话已验证，但无法加载资料。",
      requiredFieldsError: "请填写所有必填字段",
      invalidEmailFormat: "电子邮件格式无效",
      profileUpdatedSuccess: "资料更新成功！",
      profileUpdateError: "更新资料时出错。请检查数据并重试。",
      retail: "零售",
      services: "服务",
      restaurant: "餐厅",
      education: "教育",
      health: "健康",
      technology: "技术",
      beauty: "美容",
      automotive: "汽车",
      realEstate: "房地产",
      financial: "金融",
      sports: "体育",
      entertainment: "娱乐",
      travel: "旅行",
      wellness: "健康护理",
      pet: "宠物",
      other: "其他"
    },
    label: {
      approved: "已批准",
      pending: "待处理",
      rejected: "已拒绝",
      inAppeal: "申诉中",
      disabled: "已禁用",
      utility: "实用工具",
      marketing: "营销",
      authentication: "身份验证",
      arAR: "阿拉伯语（沙特）",
      tshivenda: "文达语",
      isiNdebeleNo: "北恩德贝莱语",
      isiNdebeleSu: "南恩德贝莱语",
      Sepedi: "塞佩蒂语",
      Sesotho: "塞索托语",
      ptBR: "葡萄牙语（巴西）",
      ptPT: "葡萄牙语（葡萄牙）",
      enUS: "英语（美国）",
      enGB: "英语（英国）",
      esES: "西班牙语（西班牙）",
      esMX: "西班牙语（墨西哥）",
      esAR: "西班牙语（阿根廷）",
      frFR: "法语（法国）",
      frCA: "法语（加拿大）",
      itIT: "意大利语",
      deDE: "德语",
      nlNL: "荷兰语",
      ruRU: "俄语",
      jaJP: "日语",
      koKR: "韩语",
      zhCN: "中文（简体）",
      zhTW: "中文（繁體）",
      arAE: "阿拉伯语（阿联酋）",
      arEG: "阿拉伯语（埃及）",
      arSA: "阿拉伯语（沙特阿拉伯）",
      arMA: "阿拉伯语（摩洛哥）",
      arTN: "阿拉伯语（突尼斯）",
      arDZ: "阿拉伯语（阿尔及利亚）",
      hiIN: "印地语",
      trTR: "土耳其语",
      plPL: "波兰语",
      svSE: "瑞典语",
      noNO: "挪威语",
      daDK: "丹麦语",
      fiFI: "芬兰语",
      elGR: "希腊语",
      huHU: "匈牙利语",
      csCZ: "捷克语",
      skSK: "斯洛伐克语",
      roRO: "罗马尼亚语",
      bgBG: "保加利亚语",
      hrHR: "克罗地亚语",
      srRS: "塞尔维亚语",
      slSI: "斯洛文尼亚语",
      etEE: "爱沙尼亚语",
      lvLV: "拉脱维亚语",
      ltLT: "立陶宛语",
      mtMT: "马耳他语",
      isIS: "冰岛语",
      gaIE: "爱尔兰语",
      cyGB: "威尔士语",
      euES: "巴斯克语",
      caES: "加泰罗尼亚语",
      glES: "加利西亚语",
      caESVALENCIA: "加泰罗尼亚语（瓦伦西亚）",
      heIL: "希伯来语",
      faIR: "波斯语（伊朗）",
      thTH: "泰语",
      viVN: "越南语",
      idID: "印尼语",
      msMY: "马来语",
      filPH: "菲律宾语",
      bnIN: "孟加拉语",
      taIN: "泰米尔语",
      teIN: "泰卢固语",
      mrIN: "马拉地语",
      guIN: "古吉拉特语",
      knIN: "卡纳达语",
      mlIN: "马拉雅拉姆语",
      paIN: "旁遮普语",
      urPK: "乌尔都语（巴基斯坦）",
      sdPK: "信德语（巴基斯坦）",
      psAF: "普什图语",
      prsAF: "达里语（阿富汗）",
      uzUZ: "乌兹别克语",
      kkKZ: "哈萨克语",
      kyKG: "柯尔克孜语",
      tgTJ: "塔吉克语",
      tkTM: "土库曼语",
      mnMN: "蒙古语",
      neNP: "尼泊尔语",
      siLK: "僧伽罗语",
      myMM: "缅甸语",
      kmKH: "高棉语",
      loLA: "老挝语",
      mnMNCYRL: "蒙古语（西里尔）",
      mnMNMONG: "蒙古语（传统）",
      amET: "阿姆哈拉语",
      tiET: "提格里尼亚语",
      soSO: "索马里语",
      swKE: "斯瓦希里语",
      yoNG: "约鲁巴语",
      igNG: "伊博语",
      haNG: "豪萨语",
      zuZA: "祖鲁语",
      xhZA: "科萨语",
      afZA: "南非荷兰语",
      stZA: "南索托语",
      tnZA: "茨瓦纳语",
      veZA: "文达语",
      tsZA: "聪加语",
      nrZA: "南恩德贝莱语",
      ndZA: "北恩德贝莱语",
      nsoZA: "北索托语",
      sstZA: "南索托语（变体）",
      header: "标题",
      body: "正文",
      footer: "页脚",
      buttons: "按钮",
      texto: "文本",
      imagem: "图片",
      documento: "文档",
      video: "视频",
      localizacao: "位置",
      quickReply: "快速回复",
      url: "网址",
      telefone: "电话",
      otp: "一次性密码"
    },    
    tabs: {
      phones: "电话",
      templates: "模板",
      create: "创建模板"
    },
    common: {
      selectWabaConnection: "选择 WABA 连接",
      noWabaConnectionsAvailable: "没有可用的 WABA 连接",
      appId: "应用程序 ID",
      appIdHint: "用于媒体上传的 Facebook App ID",
      type: "类型",
      editTemplate: "编辑模板",
      nameHint: "仅允许使用小写字母和下划线 (_)",
      buttonTextHint: "最多 25 个字符",
      fieldRequired: "必填字段",
      phoneNumberIdRequired: "需要电话号码 ID",
      wabaIdRequired: "需要 WABA ID",
      wabaVersionRequired: "WABA 版本是强制性的",
      wabaTokenRequired: "WABA 代币是强制性的",
      codeRequired: "输入收到的代码",
      enterPin: "输入 6 位 PIN 码",
      enterCode: "输入收到的代码",
      enterPhoneNumberId: "输入电话号码ID",
      enterWabaId: "输入WABA ID",
      enterWabaVersion: "例如：v23.0",
      enterWabaToken: "输入访问令牌"
    },
    templates: {
      title: "模板",
      create: "创建模板",
      refresh: "更新",
      noTemplates: "未找到模板",
      noPreview: "没有可用的预览",
      filters: {
        status: "地位",
        category: "类别",
        language: "语言",
        search: "搜索模板..."
      },
      actions: {
        view: "看法",
        test: "测试",
        edit: "编辑",
        delete: "删除"
      },
      createForm: {
        basicInfo: "基本信息",
        name: "模板名称",
        nameRequired: "姓名为必填项",
        appIdRequired: "应用程序 ID 是必填项",
        language: "语言",
        languageRequired: "语言是必需的",
        category: "类别",
        categoryRequired: "类别为必填项",
        components: "成分",
        addComponent: "添加组件",
        component: "成分",
        componentType: "组件类型",
        headerFormat: "标题格式",
        text: "文本",
        buttons: "按钮",
        addButton: "添加按钮",
        button: "按钮",
        buttonType: "按钮类型",
        buttonText: "按钮文本",
        url: "网址",
        phoneNumber: "电话号码",
        submit: "创建模板",
        requiredFieldsNote: "带 * 的必填字段"
      },
      details: {
        info: "信息",
        id: "ID",
        status: "地位",
        category: "类别",
        language: "语言",
        components: "成分"
      },
      delete: {
        confirmTitle: "确认删除",
        confirmMessage: "您确定要删除模板“{name}”吗？此操作无法撤消。"
      },
      notifications: {
        created: "模板创建成功！",
        updated: "模板更新成功！",
        deleted: "模板删除成功！"
      },
      errors: {
        listError: "加载模板时出错",
        createError: "创建模板时出错",
        updateError: "更新模板时出错",
        deleteError: "删除模板时出错"
      }
    },
    phones: {
      title: "电话",
      selectConnection: "选择 WABA 连接",
      noConnections: "没有可用的 WABA 连接",
      checkPhone: "检查电话",
      registerPhone: "注册电话",
      noConnectionsFound: "未找到 WABA 连接。请先在“通信信道”部分设置 WABA 连接。",
      selectConnectionToManage: "选择 WABA 连接来管理电话。",
      connectionInfo: {
        title: "WABA连接信息",
        phoneNumberId: "电话号码",
        wabaId: "WABA 身份证",
        wabaVersion: "WABA版本"
      },
      phoneStatus: {
        title: "电话状态",
        phoneNumber: "电话号码",
        phoneId: "电话 ID",
        verifiedName: "姓名已验证",
        status: "地位"
      },
      tips: {
        title: "提示和信息",
        phoneVerification: {
          title: "电话验证",
          description: "确保您的手机已注册并激活 WhatsApp Business API。"
        },
        phoneRegistration: {
          title: "电话注册",
          description: "要注册电话，您需要 Facebook Business Manager 提供的 6 位数 PIN 码。"
        },
        verifiedStatus: {
          title: "已验证状态",
          description: "已验证的手机可以发送消息和模板。"
        },
        facebookBusinessManager: {
          title: "Facebook 商务管理平台",
          description: "访问：业务管理器 → WhatsApp 业务 API → 电话号码"
        }
      }
    },
    phoneRegistration: {
      title: "在WABA注册手机",
      description: "要注册电话，您需要 Facebook Business Manager 提供的 6 位数 PIN 码。",
      phoneNumberId: "电话号码ID",
      phoneNumberIdHint: "WABA 中唯一的电话 ID",
      wabaId: "WABA 身份证",
      wabaIdHint: "WhatsApp 商业帐户 ID",
      wabaVersion: "WABA版本",
      wabaVersionHint: "Facebook Graph API 版本",
      wabaToken: "WABA 代币",
      wabaTokenHint: "API访问令牌",
      pin: "6 位 PIN 码",
      pinHint: "用于 Facebook Business Manager 注册的 6 位 PIN 码",
      register: "注册电话",
      success: "手机已成功注册WABA！",
      error: "注册手机时出错。请检查 PIN 码和凭证。"
    },
    verification: {
      requestTitle: "请求代码",
      verifyTitle: "校验码",
      requestDescription: "验证码将通过短信或电话发送至注册的电话号码。",
      verifyDescription: "输入通过短信或电话发送的验证码。",
      code: "代码",
      codeHint: "输入通过短信或电话收到的代码",
      requestCode: "请求代码",
      requestNewCode: "请求新代码",
      verify: "检查",
      success: "验证码已通过短信或电话发送！请验证您的手机。",
      verifySuccess: "代码验证成功！手机已激活。",
      error: "请求验证码错误。",
      verifyError: "验证码错误。请检查代码是否正确。",
      smsOption: "短信",
      voiceOption: "电话",
      locale: "地点",
      language: "语言",
      methodTitle: "运送方式",
      localeHint: "选择验证码的位置",
      languageHint: "选择验证码的语言"
    },
    test: {
      title: "发送测试模板",
      phoneNumber: "测试电话号码",
      phoneNumberHint: "输入带国家代码的号码（例如 5511999999999）",
      variables: "变量值：",
      variableValue: "{{1}} 的值",
      variablePlaceholder: "输入 {variable} 的值",
      preview: "模板预览：",
      sendTest: "提交测试",
      success: "测试模板发送成功！",
      error: "发送测试模板时出错。请检查号码并重试。",
      invalidNumber: "电话号码必须介于 10 到 15 位数字之间。",
      fillVariables: "填写模板变量的所有值。"
    },
    messages: {
      selectWabaConnection: "选择 WABA 连接来查看模板",
      selectWabaToCreate: "选择 WABA 连接来创建模板。",
      selectWabaToEdit: "选择 WABA 连接来编辑模板。",
      selectWabaToDelete: "选择 WABA 连接以删除模板。",
      selectWabaToTest: "选择 WABA 连接来发送测试模板。",
      selectWabaToCheck: "选择 WABA 连接来检查手机。",
      selectWabaFirst: "请先选择 WABA 连接。",
      phoneAlreadyRegistered: "手机已在该 WABA 注册！",
      phoneNotRegistered: "手机未在该 WABA 注册。",
      phoneVerifiedNotRegistered: "已在 WABA 验证电话。",
      phoneNotVerified: "电话号码尚未验证。您必须完成验证过程。",
      codeExpired: "验证码已过期。需要重新进行验证。",
      sampleTemplateEdit: "这是 Facebook 提供的示例模板，无法编辑。",
      sampleTemplateDelete: "这是 Facebook 提供的示例模板，无法删除。",
      sampleTemplateChip: "示例模板",
      sampleTemplateEditTitle: "示例模板无法编辑。",
      sampleTemplateDeleteTitle: "示例模板无法删除",
      noWabaConnections: "未找到 WABA 连接。请先在“通信信道”部分设置 WABA 连接。",
      noWabaConnectionsShort: "未找到 WABA 连接。请先设置 WABA 连接。",
      allFieldsRequired: "所有字段均为必填项，包括 6 位 PIN 码。",
      pinFormatError: "PIN 必须正好有 6 位数字。",
      enterPhoneNumber: "输入电话号码进行测试。",
      enterCode: "输入通过短信或电话收到的验证码。",
      codeExpiredDialog: {
        title: "代码已过期",
        message: "此手机的验证码已过期。要申请新的验证码吗？"
      },
      phoneNotVerifiedDialog: {
        title: "电话未验证",
        message: "此电话号码尚未验证。是否要请求验证码？"
      }
    },
    statusOptions: {
      approved: "得到正式认可的",
      pending: "待办的",
      rejected: "被拒绝",
      inAppeal: "上诉",
      disabled: "已禁用"
    },
    categoryOptions: {
      utility: "公用事业",
      marketing: "营销",
      authentication: "验证"
    },
    languageOptions: {
      ptBR: "葡萄牙语（巴西）",
      enUS: "英语（美国）",
      esES: "西班牙语"
    },
    componentTypeOptions: {
      header: "标题",
      body: "身体",
      footer: "踢脚板",
      buttons: "按钮"
    },
    headerFormatOptions: {
      text: "文本",
      image: "图像",
      document: "文档",
      video: "视频",
      location: "地点"
    },
    buttonTypeOptions: {
      quickReply: "快速响应",
      url: "网址",
      phoneNumber: "电话",
      otp: "一次性密码"
    },
    headerFields: {
      imageUrl: "图片网址（示例）",
      imagePlaceholder: "https://exemplo.com/imagem.jpg",
      documentUrl: "文档 URL（示例）",
      documentPlaceholder: "https://exemplo.com/documento.pdf",
      videoUrl: "视频网址（示例）",
      videoPlaceholder: "https://exemplo.com/video.mp4",
      latitude: "纬度（示例）",
      latitudePlaceholder: "-23.5505",
      longitude: "经度（示例）",
      longitudePlaceholder: "-46.6333",
      locationName: "地点名称（示例）",
      locationNamePlaceholder: "巴西圣保罗"
    },
    characterLimits: {
      header: "最多 60 个字符",
      body: "最多 1024 个字符",
      footer: "最多 60 个字符",
      button: "最多 25 个字符"
    },
    preview: {
      title: "模板预览",
      imageLoadError: "图像加载失败",
      urlNotAvailable: "URL/句柄不可用",
      addButtonToStart: "单击“添加按钮”开始配置按钮。"
    },
    buttons: {
      cancel: "取消",
      sendTest: "提交测试",
      registerPhone: "注册电话",
      requestCode: "请求代码",
      requestNewCode: "请求新代码",
      verify: "检查",
      checkPhone: "检查电话"
    },
    dynamic: {
      actionButton: "动作 {index}",
      buttonNumber: "{索引} 按钮"
    },
    notifications: {
      noWabaConnectionsFound: "未找到 WABA 连接。请先设置 WABA 连接。",
      selectWabaToList: "选择 WABA 连接以列出模板。",
      selectWabaToCreate: "选择 WABA 连接来创建模板。",
      selectWabaToEdit: "选择 WABA 连接来编辑模板。",
      selectWabaToDelete: "选择 WABA 连接以删除模板。",
      selectWabaToTest: "选择 WABA 连接来发送测试模板。",
      selectWabaToCheck: "选择 WABA 连接来检查手机。",
      selectWabaFirst: "请先选择 WABA 连接。",
      phoneAlreadyRegistered: "手机已在该 WABA 注册！",
      templateCreated: "模板创建成功！",
      templateUpdated: "模板更新成功！",
      templateDeleted: "模板删除成功！",
      phoneRegistered: "手机已成功注册WABA！",
      codeSent: "验证码已通过短信或电话发送！请验证您的手机。",
      codeVerified: "代码验证成功！手机已激活。",
      testSent: "测试模板发送成功！",
      codeExpired: "验证码已过期。需要重新进行验证。",
      phoneVerifiedNotRegistered: "已在 WABA 验证电话。",
      phoneNotVerified: "电话号码尚未验证。您必须完成验证过程。",
      phoneNotRegistered: "手机未在该 WABA 注册。",
      sampleTemplateEdit: "这是 Facebook 提供的示例模板，无法编辑。",
      sampleTemplateDelete: "这是 Facebook 提供的示例模板，无法删除。",
      nameFormatted: "模板名称自动格式化以遵循 Facebook 的规则（仅限小写字母和下划线）。",
      characterLimitExceeded: "超出字符限制",
      characterLimitsExceeded: "超出限制：{details}",
      fillVariables: "填写模板变量的所有值。",
      invalidNumber: "电话号码必须介于 10 到 15 位数字之间。",
      allFieldsRequired: "所有字段均为必填项，包括 6 位 PIN 码。",
      pinFormatError: "PIN 必须正好有 6 位数字。",
      enterPhoneNumber: "输入电话号码进行测试。",
      enterCode: "输入通过短信或电话收到的验证码。",
      listError: "加载模板时出错",
      createError: "创建模板时出错",
      updateError: "编辑模板时出错",
      deleteError: "删除模板时出错",
      testError: "发送测试模板时出错。请检查号码并重试。",
      phoneCheckError: "验证电话时出错。请检查您的凭据。",
      phoneRegistrationError: "注册手机时出错。请检查 PIN 码和凭证。",
      codeRequestError: "请求验证码错误。",
      codeVerificationError: "验证码错误。请检查代码是否正确。",
      uploadError: "发送图像时出错。请检查您的连接并重试。",
      uploadSuccess: "图片上传成功！标头句柄：{handle}",
      codeExpiredDialog: {
        title: "代码已过期",
        message: "此手机的验证码已过期。要申请新的验证码吗？"
      },
      phoneNotVerifiedDialog: {
        title: "电话未验证",
        message: "此电话号码尚未验证。是否要请求验证码？"
      }
    }
  },
  googleCallback: {
    processing: "正在处理授权...",
    waitMessage: "我们正在处理您的 Google 日历授权，请稍候。",
    errors: {
      authorization: "授权错误：{error}",
      codeNotFound: "未找到授权码",
      configNameNotFound: "未找到配置名称",
      noConfigFound: "未找到配置",
      configNotFoundForName: "未找到名称为 {name} 的配置",
      invalidTokens: "获取令牌时出错：返回的数据无效",
      saveTokensError: "保存令牌时出错：{error}",
      processAuthorizationError: "处理授权时出错：{error}"
    },
    success: {
      authorizationCompleted: "授权成功完成！"
    },
    warnings: {
      noParameters: "URL 中未找到参数"
    }
  },
  googleCalendar: {
    title: "Google 日历",
    config: {
      modal: {
        redirectUri: {
          label: "重定向URL",
          hint: "用于接收授权代码的URL",
          copyTooltip: "复制到剪贴板",
          copySuccess: "重定向URL已复制到剪贴板！",
          copyError: "无法复制到剪贴板，请手动复制！"
        },        
        editTitle: "编辑配置",
        newTitle: "新配置",
        completeMessage: "设置完成！您可以保存。",
        incompleteMessage: "填写所有字段并获取要保存的令牌。",
        name: {
          label: "配置名称",
          required: "姓名为必填项",
          hint: "例如：主要议程、个人议程等。"
        },
        clientId: {
          label: "Google 客户端 ID",
          required: "需要客户 ID"
        },
        clientSecret: {
          label: "Google 客户端密钥",
          required: "客户端密钥是必需的"
        },
        accessToken: {
          label: "访问令牌",
          required: "访问令牌是必需的"
        },
        refreshToken: {
          label: "刷新令牌",
          required: "刷新令牌是必需的"
        },
        getTokensButton: "自动获取代币",
        getTokensTooltip: "点击自动获取Access Token和Refresh Token",
        saveButton: "保存配置",
        cancelButton: "取消",
        deleteButton: "删除配置"
      },
      management: {
        title: "管理设置",
        newButton: "新配置",
        table: {
          name: "姓名",
          status: "地位",
          tokens: "代币",
          createdAt: "创建于",
          actions: "行动",
          statusActive: "积极的",
          statusInactive: "不活跃",
          tokensComplete: "完全的",
          tokensPending: "待办的"
        },
        actions: {
          edit: "编辑配置",
          delete: "删除配置"
        }
      },
      errors: {
        fillRequiredFields: "填写所有必填字段",
        saveError: "保存配置时出错：{error}",
        deleteError: "删除配置时出错：{error}",
        fillClientCredentials: "首先填写Client ID和Client Secret",
        fillConfigName: "先填写配置名称",
        generateAuthUrlError: "生成授权 URL 时出错：{error}",
        redirectingAuth: "重定向至 Google 授权..."
      },
      success: {
        saved: "配置保存成功！",
        deleted: "配置删除成功！",
        selectedForEdit: "选择要编辑的配置。"
      },
      confirm: {
        deleteTitle: "确认删除",
        deleteMessage: "您确定要删除此设置吗？",
        deleteCalendarMessage: "您确定要删除此 Google 日历设置吗？"
      }
    },
    events: {
      create: {
        modal: {
          titleCreate: "创建新活动",
          title: {
            label: "活动标题",
            required: "标题为必填项"
          },
          selectCalendar: "选择日历",
          selectCalendarRequired: "选择时间表",
          noConfigAvailable: "没有可用的配置",
          startDateTime: {
            label: "开始日期和时间",
            required: "开始日期为必填项"
          },
          endDateTime: {
            label: "结束日期和时间",
            required: "结束日期为必填项"
          },
          description: {
            label: "描述"
          },
          location: {
            label: "地点"
          },
          attendees: {
            label: "参与者（电子邮件以逗号分隔）",
            hint: "example@email.com, other@email.com"
          },
          createButton: "创建活动",
          cancelButton: "取消"
        },
        errors: {
          selectConfig: "选择一个配置来创建事件。",
          configNotFound: "未找到所选配置。",
          configureCredentials: "首先设置您的 Google 日历凭据",
          createError: "创建事件时出错：{error}"
        },
        success: {
          created: "事件創建成功！"
        }
      },
      list: {
        title: "活动",
        selectCalendar: "选择日历",
        noConfigAvailable: "没有可用的配置",
        createNewButton: "创建新事件",
        createNewTooltip: "在 Google 日历中创建新活动",
        filters: {
          startDate: "开始日期",
          endDate: "结束日期",
          maxResults: "结果数量",
          searchButton: "搜索"
        },
        table: {
          title: "标题",
          start: "开始",
          end: "结尾",
          location: "地点",
          status: "地位",
          actions: "行动"
        },
        actions: {
          edit: "编辑活动",
          delete: "删除事件",
          open: "在 Google 日历中打开"
        },
        errors: {
          selectConfig: "选择配置来搜索事件。",
          configNotFound: "未找到所选配置。",
          configureCredentials: "首先设置您的 Google 日历凭据",
          loadError: "加载事件时出错：{error}"
        }
      },
      edit: {
        modal: {
          titleEdit: "编辑活动",
          title: {
            label: "活动标题",
            required: "标题为必填项"
          },
          startDateTime: {
            label: "开始日期和时间",
            required: "开始日期为必填项"
          },
          endDateTime: {
            label: "结束日期和时间",
            required: "结束日期为必填项"
          },
          description: {
            label: "描述"
          },
          location: {
            label: "地点"
          },
          attendees: {
            label: "参与者（电子邮件以逗号分隔）",
            hint: "example@email.com, other@email.com"
          },
          updateButton: "更新事件",
          cancelButton: "取消"
        },
        errors: {
          selectConfig: "选择一个设置来更新事件。",
          configNotFound: "未找到所选配置。",
          updateError: "更新事件时出错：{error}"
        },
        success: {
          updated: "事件更新成功！"
        }
      },
      delete: {
        confirm: {
          title: "确认删除",
          message: "您确定要删除此活动吗？"
        },
        errors: {
          selectConfig: "选择一个设置来删除该事件。",
          configNotFound: "未找到所选配置。",
          deleteError: "删除事件时出错：{error}"
        },
        success: {
          deleted: "事件刪除成功！"
        }
      }
    }
  },
  gmailCallback: {
    processing: "正在处理授权...",
    waitMessage: "请稍候，我们正在处理您的Gmail授权。",
    title: "Gmail授权完成！",
    message: "您的Gmail账户已成功配置为OAuth2。",
    infoSession: "会话信息：",
    whatsappId: "WhatsApp ID：",
    status: "状态：",
    data: "日期：",
    closeWindow: "关闭窗口",
    errorTitle: "授权错误",
    debugInfo: "调试信息：",
    fullUrl: "完整URL：",
    parameters: "参数：",
    retry: "重试",
    callbackTitle: "Gmail回调",
    waitingMessage: "正在等待授权处理...",
    noParametersFound: "在URL中未找到参数",
    authorizationError: "授权错误",
    codeNotFound: "未找到授权代码",
    whatsappIdNotFound: "未找到WhatsApp ID",
    saveTokensError: "保存令牌时出错",
    processAuthorizationError: "处理授权时出错"
  }  
};
