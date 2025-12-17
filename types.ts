export interface OrderEntry {
  id: number;
  orderNo: string;           // 订单号
  phone: string;             // 手机号
  customerName: string;      // 客户名称
  status: string;            // 状态
  masterName: string;        // 师傅
  creator: string;           // 录单人
  source: string;            // 来源 (新增)
  dispatcher: string;        // 派单人
  createTime: string;        // 创建时间
  reason: string;            // 原因
  evidence: string;          // 佐证材料
}

export interface PaginationState {
  currentPage: number;
  pageSize: number;
  totalItems: number;
}