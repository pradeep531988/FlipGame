package com.example.flipkartgame.util;

import java.util.Comparator;

import com.example.flipkartgame.model.Report;

public class ReportsDateComparator implements Comparator<Report>{

	
	@Override
	public int compare(Report o1, Report o2) {
		
		if (o1.getCreated_at().compareTo(o2.getCreated_at()) > 0) {
			return -1;
		} else if (o1.getCreated_at().compareTo(o2.getCreated_at()) < 0) {
            return 1;
        } else {
        	return 0;
        } 
	}
	
	

}
