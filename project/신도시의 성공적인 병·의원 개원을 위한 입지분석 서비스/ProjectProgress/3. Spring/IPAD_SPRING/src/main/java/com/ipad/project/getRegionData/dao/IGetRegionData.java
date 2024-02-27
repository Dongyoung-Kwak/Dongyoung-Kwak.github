package com.ipad.project.getRegionData.dao;

import java.util.ArrayList;

import com.ipad.project.getRegionData.model.GetRegionDataVO;
import com.ipad.project.getRegionData.model.PointVO;

public interface IGetRegionData {
	int calEmploymentAvgFee(String adm_cd);

	int calRentFee(String adm_cd, String areaSize);

	ArrayList<Integer> calEmploymentFee(String adm_cd, String seniorEmployeeCount, String juniorEmployeeCount);

	GetRegionDataVO calNetProfit(String adm_cd);

	String getResionCode(String regionName);
	
	int calculateSale(String adm_cd);
	
	PointVO getWeightPoint();
}
