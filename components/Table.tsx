import React from 'react';
import { OrderEntry } from '../types';

interface TableProps {
  data: OrderEntry[];
}

export const Table: React.FC<TableProps> = ({ data }) => {
  return (
    <div className="bg-white rounded-sm shadow-sm overflow-hidden border border-gray-200 min-h-[500px] flex flex-col">
      <div className="overflow-x-auto flex-1 pb-4">
        <table className="min-w-full divide-y divide-gray-200 text-sm text-gray-600">
          <thead className="bg-[#f7f8fa]">
            <tr>
              <th className="px-4 py-3 text-left font-medium whitespace-nowrap border-r border-gray-100 w-16">序号</th>
              <th className="px-4 py-3 text-left font-medium whitespace-nowrap border-r border-gray-100">订单号</th>
              <th className="px-4 py-3 text-left font-medium whitespace-nowrap border-r border-gray-100">手机号</th>
              <th className="px-4 py-3 text-left font-medium whitespace-nowrap border-r border-gray-100">客户名称</th>
              <th className="px-4 py-3 text-left font-medium whitespace-nowrap border-r border-gray-100">状态</th>
              <th className="px-4 py-3 text-left font-medium whitespace-nowrap border-r border-gray-100">师傅</th>
              <th className="px-4 py-3 text-left font-medium whitespace-nowrap border-r border-gray-100">录单人</th>
              <th className="px-4 py-3 text-left font-medium whitespace-nowrap border-r border-gray-100">来源</th>
              <th className="px-4 py-3 text-left font-medium whitespace-nowrap border-r border-gray-100">派单人</th>
              <th className="px-4 py-3 text-left font-medium whitespace-nowrap border-r border-gray-100">创建时间</th>
              <th className="px-4 py-3 text-left font-medium whitespace-nowrap border-r border-gray-100">原因</th>
              <th className="px-4 py-3 text-left font-medium whitespace-nowrap">佐证材料</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {data.length > 0 ? (
              data.map((row, index) => (
                <tr key={row.id} className={`${index % 2 !== 0 ? 'bg-[#f0f9ff]' : 'bg-white'} hover:bg-blue-50 transition-colors`}>
                  <td className="px-4 py-3 border-r border-gray-100 whitespace-nowrap">{row.id}</td>
                  <td className="px-4 py-3 border-r border-gray-100 whitespace-nowrap">{row.orderNo}</td>
                  <td className="px-4 py-3 border-r border-gray-100 whitespace-nowrap">{row.phone}</td>
                  <td className="px-4 py-3 border-r border-gray-100 whitespace-nowrap">{row.customerName}</td>
                  <td className="px-4 py-3 border-r border-gray-100 whitespace-nowrap">
                    <span className={`px-2 py-1 rounded text-xs ${
                      row.status === '已完成' ? 'bg-green-100 text-green-700' : 
                      row.status === '已取消' ? 'bg-red-100 text-red-700' :
                      row.status === '服务中' ? 'bg-blue-100 text-blue-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {row.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 border-r border-gray-100 whitespace-nowrap">{row.masterName}</td>
                  <td className="px-4 py-3 border-r border-gray-100 whitespace-nowrap">{row.creator}</td>
                  <td className="px-4 py-3 border-r border-gray-100 whitespace-nowrap font-medium text-blue-600">{row.source}</td>
                  <td className="px-4 py-3 border-r border-gray-100 whitespace-nowrap">{row.dispatcher}</td>
                  <td className="px-4 py-3 border-r border-gray-100 whitespace-nowrap">{row.createTime}</td>
                  <td className="px-4 py-3 border-r border-gray-100 whitespace-nowrap text-red-500">{row.reason}</td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    {row.evidence !== '无' ? (
                        <span className="text-blue-500 cursor-pointer hover:underline">{row.evidence}</span>
                    ) : (
                        <span className="text-gray-400">{row.evidence}</span>
                    )}
                  </td>
                </tr>
              ))
            ) : (
                <tr>
                    <td colSpan={12} className="h-96 text-center">
                        <div className="flex flex-col items-center justify-center h-full text-gray-400">
                            <span>暂无数据</span>
                        </div>
                    </td>
                </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};