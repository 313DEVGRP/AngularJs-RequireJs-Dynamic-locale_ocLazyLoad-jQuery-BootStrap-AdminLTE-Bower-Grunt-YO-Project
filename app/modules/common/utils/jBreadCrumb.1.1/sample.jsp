<%
/**
 * 	통합 서비스의 Index 페이지 입니다. 
 * 	JSP 페이지의 파일 Name은 소문자로 시작합니다
 * 	JSTL을 적극적으로 사용합니다.
 * 	본 페이지에서는 ajax/common.js 파일을 보시면 무엇을 로드하여 div에 맵핑하는지 알수 있습니다.
 *
 * 	@author : 이동민
 * 	@date   : 2011. 4. 15.
 * 	-------------------------- Modification Log ------------------------------------
 * 	Ver No   	Date           	Author           	Modification
 *	0.0.1  		2011. 04. 15.    	이동민 				Initial Version
 *  0.0.1  		2012. 01. 04.    	이동민 				khld.co.kr 과 313.co.kr 의 사이트는 같은 사이트인것으로 간주하여 개발한다.
 *  0.0.1  		2012. 01. 04.    	이동민 				DaesungGlobal의 사이트는 아이피로 서비스가 구분되어야 한다. 향후 domain 정책의 변경이 필요하다.
 */
%>

<%@ page isELIgnored="false" language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" trimDirectiveWhitespaces="true"%>

<%@ taglib uri="http://www.opensymphony.com/sitemesh/decorator" prefix="decorator" %>
<%@ taglib uri="http://www.opensymphony.com/sitemesh/page" prefix="page" %>

<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"  %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="sql" uri="http://java.sun.com/jsp/jstl/sql" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>


<!-- CSS Setting -->
<link type="text/css" rel="stylesheet" href="${pageContext.request.contextPath}/jquery/jquery-ui-1.8.11.custom/css/smoothness/jquery-ui-1.8.11.custom.css" media="screen"/>

<link rel="stylesheet" href="Styles/Base.css" type="text/css"/>
<link rel="stylesheet" href="Styles/BreadCrumb.css" type="text/css"/>
        
<!-- Default JQuery Setting -->
<script type="text/javascript" src="${pageContext.request.contextPath}/jquery/jquery.com/jquery-1.5.2.min.js" charset="utf-8"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/jquery/jquery-ui-1.8.11.custom/js/jquery-ui-1.8.11.custom.min.js" charset="utf-8"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/jquery/plugIns/jQueryEasingPlugin.version1.3/jquery.easing.1.3.js" charset="utf-8"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/jquery/plugIns/pngFix1.1/jquery.pngFix.pack.js" charset="utf-8"></script>

<!-- AJAX and Load Common Setting -->
<script type="text/javascript" src="${pageContext.request.contextPath}/jquery/plugIns/malsup.com/jquery/form/jquery.form.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/ajax/common.js"></script>

<script src="js/jquery.jBreadCrumb.1.1.js" type="text/javascript" language="JavaScript">
</script>
<script type="text/javascript">
    jQuery(document).ready(function()
    {
        jQuery("#breadCrumb0").jBreadCrumb();
    })
</script>

</head> 

<body> 
<div id="container">
            <!-- Bread Crumb Code - Be sure to include the chevronOverlay element so we can load the semi transparend png -->
            <div class="breadCrumbHolder module">
                <div id="breadCrumb0" class="breadCrumb module">
                    <ul>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Biocompare Home</a>
                        </li>
                        <li>
                            <a href="#">Product Discovery</a>
                        </li>
                        <li>
                            <a href="#">Life Science Products / Laboratory Supplies</a>
                        </li>
                        <li>
                            <a href="#">Kits and Assays</a>
                        </li>
                        <li>
                            <a href="#">Mutagenesis Kits</a>
                        </li>
                        <li>
                            Mutation Generation System&trade;
                        </li>
                    </ul>
                </div>
            </div>
        </div>

</body>
</html> 