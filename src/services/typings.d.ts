// @ts-ignore
/* eslint-disable */

declare namespace API {
  type Result = {
    detail: string;
  };

  type PageResult<T> = Result & {
    data: T;
  };

  type ListResult<T> = Result & {
    data: T[];
    total: number;
  };

  type LoginParams = {
    username: string;
    password: string;
  };

  type LoginResult = {
    access_token: string;
    token_type: string;
  };

  type CurrentUser = {
    id?: number;
    is_active?: boolean;
    username?: string;
  };

  type PageParams = {
    type?: 'all' | 'page';
    pageNum?: number;
    pageSize?: number;
  };

  type DetailParams = {
    id: number | string;
  };
}

declare namespace Device {
  type DeviceItem = {
    rsuName: string; // RSU 名称
    rsuEsn: string; // 序列号
    areaCode: string; // 安装位置-区
    address: string; // 具体位置
  };
  type CreateDeviceParams = DeviceItem & {
    rsuId?: number;
    tmpId?: number; // 未注册 RSU 的临时 RSU id
    province?: string[]; // 安装位置
    countryCode?: string; // 安装位置-国
    provinceCode?: string; // 安装位置-省
    cityCode?: string; // 安装位置-市
    rsuModelId?: number; // RSU 型号
    desc?: string; // 描述
    rsuIP?: string; // RSU IP
    enabled?: boolean; // RSU 状态
  };
  type DeviceListItem = DeviceItem & {
    id: number;
    number: string; // 设备编码
    countryName: string; // 安装位置-国
    provinceName: string; // 安装位置-省
    cityName: string; // 安装位置-市
    areaName: string; // 安装位置-区
    onlineStatus: boolean; // 设备在线状态
    rsuStatus: boolean; // RSU 状态
    enabled?: boolean; // RSU 启禁用状态
    deliveryStatus?: number;
    createTime: string; // 创建时间
    countryCode: string; // 安装位置-国
    provinceCode: string; // 安装位置-省
    cityCode: string; // 安装位置-市
    areaCode: string; // 安装位置-区
    desc: string; // 描述
    rsuModelId: number; // RSU 型号
    rsuModelName: string; // RSU 型号
    rsuIP: string; // RSU IP
  };

  type ModelListItem = {
    id?: number;
    name: string; // RSU 型号名称
    manufacturer: string; // 厂商名称
    desc: string; // 描述
  };

  type CameraItem = {
    name: string; // 摄像头、雷达名称
    sn: string; // 摄像头序列号、雷达序列号
    streamUrl?: string; // 摄像头视频流
    lng: number; // 经度
    lat: number; // 纬度
    elevation: number; // 海拔
    towards: number; // 朝向
    desc: string; // 描述
  };
  type CreateCameraParams = CameraItem & {
    rsuId: number; // 关联 RSU
  };
  type CameraListItem = CameraItem & {
    id: number;
    countryName: string;
    provinceName: string;
    cityName: string;
    areaName: string;
    rsuName: string; // RSU 名称
    createTime: string; // 创建时间
  };
}

declare namespace Config {
  type MapItem = {
    name: string; // MAP 名称
    areaCode: string; // MAP 区域
    address: string; // MAP 位置
    desc: string; // MAP 信息描述
  };
  type CreateMapConfigParams = MapItem & {
    data: Record<string, any>; // MAP 数据文件
    province?: string[]; // 安装位置
    countryCode?: string; // 安装位置-国
    provinceCode?: string; // 安装位置-省
    cityCode?: string; // 安装位置-市
  };
  type MapListItem = MapItem & {
    id: number;
    countryName: string; // MAP 区域-国家
    countryCode: string; //
    provinceName: string; // MAP 区域-省
    provinceCode: string;
    areaName: string; // MAP 区域-市
    cityName: string; // MAP 区域-区
    cityCode: string;
    status: boolean; // 下发状态
    amount: number; // 下发 RSU 数量
    number: number; // 下发 RSU 数量
    createTime: string;
  };
  type MapRSUListItem = {
    id: number;
    rsuName: string;
    rsuSn: string;
    onlineStatus: boolean;
    rsuStatus: boolean;
    deliveryStatus: number;
    createTime: string;
  };

  type RSM<T> = {
    upLimit: number; // 上行转发上限
    upFilters: T; // 条件
  };
  type ParameterInfo<T = { [key: string]: string }[]> = {
    bsmConfig: {
      sampleMode: string; // 采样方式
      sampleRate: number; // 采样率
    } & RSM<T>;
    rsiConfig: {
      upFilters: T; // 条件
    };
    rsmConfig: RSM;
    mapConfig: RSM;
    spatConfig: RSM;
  };
  type ParameterListItem<T = { [key: string]: string }[]> = {
    id: number;
    name: string; // 配置项名称
    rsus?: [];
  } & ParameterInfo<T>;

  type MaintenanceItem = {
    hbRate: number; // 心跳上报频率
    runningInfoRate: number; // 运行状态上报频率
    logLevel: number; // 日志上报频率
    reboot: number; // 是否重启
    cssUrl: string; // 云控中心地址
    time: number; // 时间戳
    extendConfig: string; // 自定义配置
    addressChg?: {
      cssUrl: string; // 云控中心地址
      time: number; // 时间戳
    };
  };
  type MaintenanceListItem = MaintenanceItem & {
    id: number;
    rsuName: string; // RSU 名称
    rsuEsn: string; // 序列号
  };

  type CreateLogConfigParams = {
    uploadUrl: string;
    userId: string;
    password: string;
    transprotocal: string;
    rsus: number[];
  };
  type LogListItem = {
    id: number;
    uploadUrl: string;
    userId: string;
    createTime: string;
  };

  type QueryItem = {
    queryType: number;
    timeType: number;
  };
  type CreateQueryParams = QueryItem & {
    rsus: number[];
  };
  type QueryListItem = QueryItem & {
    id: number;
    rsus: { rsuName: string; rsuId: number; rsuEsn: string }[];
    createTime: string;
  };
  type QueryStatusDetails = {
    cpu: {
      load?: number; // CPU 负载
      uti?: number; // CPU 利用率
    };
    mem: {
      total?: number; // 内存总量(M)
      used?: number; // 已用内存(M)
      free?: number; // 可用内存(M)
    };
    disk: {
      total?: number; // 磁盘总量(M)
      used?: number; // 已用磁盘(M)
      free?: number; // 可用磁盘(M)
      tps?: number; // 每秒 IO 请求数
      write?: number; // 每秒写入磁盘数据量(K)
      read?: number; // 每秒读取磁盘数据量(K)
    };
    net: {
      rx?: number; // 每秒接受数据包数量
      tx?: number; // 每秒发送数据包数量
      rxByte?: number; // 每秒接受数据字节数
      txByte?: number; // 每秒发送数据字节数
    };
  };
  type QueryStatisticsDetails = {
    RSI: number; // RSI 消息上报总量
    MAP: number; // MAP 消息上报总量
    RSM: number; // RSM 消息上报总量
    SPAT: number; // SPAT 消息上报总
    BSM: number; // BSM 消息上报总量
  };
  type QueryDeviceDetails = {
    deviceId: number; // 设备 ID
    deviceType: string; // 设备类型
    deviceName: string; // 设备名称
    powerStatus: number; // 电源状态
    runStatus: number; // 运行状态
    networkStatus: number; // 连接状态
  };
  type QueryInfoDetails = QueryItem & {
    rsuId: number;
    rsuName: string;
    rsuEsn: string;
    powerStatus?: string;
    runStatus?: string;
    networkStatus?: string;
    data: QueryStatusDetails[] | QueryStatisticsDetails[] | QueryDeviceDetails[];
  };
}

declare namespace Event {
  type RSIListItem = {
    id: number;
    eventClass: string; // 事件分类
    eventType: string; // 事件类型
    countryName: string; // 发生区域-国
    provinceName: string; // 发生区域-省
    cityName: string; // 发生区域-市
    areaName: string; // 发生区域-区
    address: string; // 发生地点
    createTime: string; // 上报时间
  };
  type RSIDetails = RSIListItem & {
    id: number;
    createTime: string; // 上报时间
    rsuName: string; // 下发 RSU
    eventPosition: { lon: number; lat: number }; // 经纬度
  };

  type RSMListItem = {
    id: number;
    ptcId: number; // 目标 ID
    ptcType: string; // 参与者类型
    source: number; // 数据来源
    lon: number; // 经度
    lat: number; // 纬度
    createTime: string; // 上报时间
  };
  type RSMDetails = RSMListItem & {
    id: number;
  };
}

declare namespace System {
  type UpdateEdgeNameParams = {
    name: string;
  };
  type UpdateEdgeConfigParams = {
    mqtt_config: {
      host: string;
      port: number;
      username: string;
      password: string;
    };
  };
  type SystemConfig = UpdateEdgeNameParams & UpdateEdgeConfigParams;
}
