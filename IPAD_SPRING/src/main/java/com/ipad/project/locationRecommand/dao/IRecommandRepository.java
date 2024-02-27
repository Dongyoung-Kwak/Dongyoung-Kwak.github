package com.ipad.project.locationRecommand.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

import com.ipad.project.locationRecommand.model.RecommandVO;

public interface IRecommandRepository {
	RecommandVO regionInfo(@Param("adm_nm") String adm_nm);

	int avgData(String data);

	int minData(String option);

	int maxData(String option);

	List<Map<String, Object>> selectRegion();
}
