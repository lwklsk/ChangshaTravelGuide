$(document).ready(function() {
    // 行程展开/收起
    $('#toggleItinerary').click(function() {
        const content = $('#itineraryContent');
        const icon = $('.toggle-icon');
        content.toggleClass('expanded');
        icon.toggleClass('rotated');
    });

    // 日程切换
    $('.day-btn').click(function() {
        $('.day-btn').removeClass('active');
        $(this).addClass('active');
        
        const day = $(this).data('day');
        $('.timeline-content').removeClass('active');
        $(`.timeline-content[data-day="${day}"]`).addClass('active');
    });

    // 景点点击处理
    let activeSpot = null;
    $('.spot').click(function() {
        const spotId = $(this).text();
        const detailContainer = $('#spotDetailContainer');
        
        if (activeSpot === spotId) {
            // 点击当前激活的景点，收起详情
            detailContainer.removeClass('expanded');
            $(this).removeClass('active');
            activeSpot = null;
        } else {
            // 点击新景点，展开详情
            if (activeSpot) {
                $(`.spot:contains(${activeSpot})`).removeClass('active');
            }
            $(this).addClass('active');
            detailContainer.addClass('expanded');
            $('#spotDetail').attr('src', `spot${spotId}.html`);
            activeSpot = spotId;
        }
    });
});
