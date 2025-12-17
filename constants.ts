import { OrderEntry } from './types';

// Populated with random mock data for the new requirement
export const MOCK_DATA: OrderEntry[] = Array.from({ length: 15 }).map((_, index) => ({
  id: index + 1,
  orderNo: `ORD20251217${String(index + 1).padStart(4, '0')}`,
  phone: `138${Math.floor(Math.random() * 90000000 + 10000000)}`,
  customerName: ['张三', '李四', '王五', '赵六', '钱七'][index % 5],
  status: ['待接单', '已接单', '服务中', '已完成', '已取消'][index % 5],
  masterName: ['王师傅', '李师傅', '张师傅', '刘师傅'][index % 4],
  creator: `客服${String.fromCharCode(65 + (index % 5))}`,
  source: ['APP下单', '小程序', '电话预约', '后台录入'][index % 4],
  dispatcher: `派单员${index % 3 + 1}`,
  createTime: '2025-12-17 10:00:00',
  reason: index % 3 === 0 ? '客户改约' : index % 3 === 1 ? '暂无师傅' : '',
  evidence: index % 2 === 0 ? '查看图片' : '无',
}));