import React from 'react';
import { Clock } from 'lucide-react';

interface FilterBarProps {
    onClose?: () => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({ onClose }) => {
  return (
    <div className="bg-white p-4 rounded-sm border border-gray-200 mb-3 shadow-sm">
      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
            
            {/* 订单号 */}
            <div className="flex items-center gap-2">
                <label className="whitespace-nowrap font-medium">订单号</label>
                <input 
                    type="text" 
                    placeholder="请输入内容" 
                    className="border border-gray-300 rounded px-3 py-1.5 w-40 focus:outline-none focus:border-blue-500 placeholder-gray-300"
                />
            </div>

            {/* 师傅 */}
            <div className="flex items-center gap-2">
                <label className="whitespace-nowrap font-medium">师傅</label>
                <input 
                    type="text" 
                    placeholder="请输入内容" 
                    className="border border-gray-300 rounded px-3 py-1.5 w-40 focus:outline-none focus:border-blue-500 placeholder-gray-300"
                />
            </div>

            {/* 状态 */}
            <div className="flex items-center gap-2">
                <label className="whitespace-nowrap font-medium">状态</label>
                <select className="border border-gray-300 rounded px-3 py-1.5 w-32 focus:outline-none focus:border-blue-500 bg-white text-gray-600">
                    <option value="">请选择</option>
                    <option value="pending">待接单</option>
                    <option value="accepted">已接单</option>
                    <option value="processing">服务中</option>
                    <option value="completed">已完成</option>
                    <option value="cancelled">已取消</option>
                </select>
            </div>

            {/* 创建时间 */}
            <div className="flex items-center gap-2">
                <label className="whitespace-nowrap font-medium">创建时间</label>
                <div className="flex items-center border border-gray-300 rounded overflow-hidden">
                    <div className="px-2 text-gray-400 border-r border-gray-100 bg-gray-50 h-8 flex items-center">
                        <Clock className="w-4 h-4" />
                    </div>
                    <input 
                    type="text" 
                    placeholder="开始日期" 
                    className="px-2 py-1.5 w-32 focus:outline-none placeholder-gray-300 text-center text-sm"
                    />
                    <span className="text-gray-400 px-1">至</span>
                    <input 
                    type="text" 
                    placeholder="结束日期" 
                    className="px-2 py-1.5 w-32 focus:outline-none placeholder-gray-300 text-center text-sm"
                    />
                </div>
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-3 ml-auto">
                <button className="bg-[#1890FF] hover:bg-[#096DD9] text-white px-5 py-1.5 rounded flex items-center justify-center transition-colors min-w-[60px]">
                    搜索
                </button>
                <button className="border border-gray-300 bg-white hover:bg-gray-50 text-gray-600 px-5 py-1.5 rounded flex items-center justify-center transition-colors min-w-[60px]">
                    重置
                </button>
                <button className="bg-[#1890FF] hover:bg-[#096DD9] text-white px-5 py-1.5 rounded flex items-center justify-center transition-colors min-w-[60px]">
                    导出
                </button>
            </div>
      </div>
    </div>
  );
};