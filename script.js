// Dashboard Configuration
const config = {
    updateInterval: 30000, // 30 seconds
    animationDuration: 800,
    currency: 'USD',
    locale: 'ar-SA'
};

// Realistic data for a year-old SaaS platform
const dashboardData = {
    // Real-time metrics that update
    currentRevenue: 2847392,
    currentCustomers: 1247,
    currentEmployees: 89432,
    growthRate: 24.7,
    
    // Monthly revenue data for the past 12 months
    monthlyRevenue: [
        { month: 'يناير', revenue: 156000, target: 180000, customers: 892 },
        { month: 'فبراير', revenue: 178000, target: 185000, customers: 934 },
        { month: 'مارس', revenue: 189000, target: 190000, customers: 987 },
        { month: 'أبريل', revenue: 201000, target: 195000, customers: 1024 },
        { month: 'مايو', revenue: 218000, target: 200000, customers: 1067 },
        { month: 'يونيو', revenue: 234000, target: 210000, customers: 1098 },
        { month: 'يوليو', revenue: 247000, target: 220000, customers: 1134 },
        { month: 'أغسطس', revenue: 265000, target: 230000, customers: 1156 },
        { month: 'سبتمبر', revenue: 278000, target: 240000, customers: 1189 },
        { month: 'أكتوبر', revenue: 289000, target: 250000, customers: 1205 },
        { month: 'نوفمبر', revenue: 298000, target: 260000, customers: 1234 },
        { month: 'ديسمبر', revenue: 312000, target: 270000, customers: 1247 }
    ],
    
    // Customer segments data
    segments: [
        { name: 'البناء والمقاولات', value: 42.3, revenue: 1204857, color: '#F59E0B' },
        { name: 'النقل واللوجستيات', value: 28.7, revenue: 817243, color: '#06B6D4' },
        { name: 'الأمن والحراسة', value: 18.2, revenue: 518394, color: '#8B5CF6' },
        { name: 'التجارة والخدمات', value: 10.8, revenue: 306898, color: '#10B981' }
    ],
    
    // Performance metrics
    metrics: {
        retentionRate: 94.2,
        responseTime: 1.2,
        customerSatisfaction: 4.8,
        uptime: 99.97,
        dailyUpdates: 847329,
        errorRate: 0.03
    },
    
    // Real-time activities
    activities: [
        {
            time: '14:28',
            type: 'new_customer',
            icon: 'fa-user-plus',
            color: 'success',
            message: 'انضمت شركة "المستقبل للتجارة" مع 234 موظف',
            value: '+$2,808/شهر'
        },
        {
            time: '14:15',
            type: 'upgrade',
            icon: 'fa-chart-line',
            color: 'primary',
            message: 'ترقية حساب شركة "الخليج للمقاولات" إلى Enterprise',
            value: '+$1,247/شهر'
        },
        {
            time: '13:52',
            type: 'system',
            icon: 'fa-bell',
            color: 'warning',
            message: 'تحديث خوارزمية الذكاء الاصطناعي - تحسن الأداء بـ 12%',
            value: null
        },
        {
            time: '13:34',
            type: 'sync',
            icon: 'fa-sync',
            color: 'info',
            message: 'مزامنة 45,672 موظف عبر 23 شركة',
            value: null
        },
        {
            time: '13:18',
            type: 'payment',
            icon: 'fa-dollar-sign',
            color: 'success',
            message: 'تم استلام دفعة شهرية: $156,789',
            value: null
        }
    ]
};

// Initialize Dashboard
document.addEventListener('DOMContentLoaded', function() {
    initializeDashboard();
    setupEventListeners();
    startRealTimeUpdates();
});

function initializeDashboard() {
    // Initialize all charts and components
    initializeCharts();
    updateRealTimeMetrics();
    populateActivityFeed();
    animateCounters();
    
    console.log('🚀 Dashboard initialized successfully');
}

// Chart Initialization
function initializeCharts() {
    initializeRevenueChart();
    initializeMainRevenueChart();
    initializeSegmentChart();
    initializeMiniCharts();
}

// Mini Revenue Chart (in card)
function initializeRevenueChart() {
    const ctx = document.getElementById('revenueChart');
    if (!ctx) return;
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['', '', '', '', '', '', ''],
            datasets: [{
                data: [180000, 195000, 210000, 185000, 220000, 245000, 280000],
                borderColor: '#10B981',
                backgroundColor: 'rgba(16, 185, 129, 0.1)',
                borderWidth: 2,
                fill: true,
                tension: 0.4,
                pointRadius: 0,
                pointHoverRadius: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: { enabled: false }
            },
            scales: {
                x: { display: false },
                y: { display: false }
            },
            elements: {
                line: { borderWidth: 2 }
            }
        }
    });
}

// Main Revenue Analytics Chart
function initializeMainRevenueChart() {
    const ctx = document.getElementById('mainRevenueChart');
    if (!ctx) return;
    
    const monthlyData = dashboardData.monthlyRevenue;
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: monthlyData.map(item => item.month),
            datasets: [
                {
                    label: 'الإيرادات الفعلية',
                    data: monthlyData.map(item => item.revenue),
                    borderColor: '#10B981',
                    backgroundColor: 'rgba(16, 185, 129, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4,
                    pointBackgroundColor: '#10B981',
                    pointBorderColor: '#ffffff',
                    pointBorderWidth: 2,
                    pointRadius: 5,
                    pointHoverRadius: 8
                },
                {
                    label: 'الهدف المحدد',
                    data: monthlyData.map(item => item.target),
                    borderColor: '#1E40AF',
                    backgroundColor: 'rgba(30, 64, 175, 0.05)',
                    borderWidth: 2,
                    borderDash: [5, 5],
                    fill: false,
                    tension: 0.4,
                    pointBackgroundColor: '#1E40AF',
                    pointBorderColor: '#ffffff',
                    pointBorderWidth: 2,
                    pointRadius: 4,
                    pointHoverRadius: 6
                },
                {
                    label: 'التوقعات',
                    data: [null, null, null, null, null, null, null, null, null, null, 305000, 318000, 332000],
                    borderColor: '#F59E0B',
                    backgroundColor: 'rgba(245, 158, 11, 0.05)',
                    borderWidth: 2,
                    borderDash: [10, 5],
                    fill: false,
                    tension: 0.4,
                    pointBackgroundColor: '#F59E0B',
                    pointBorderColor: '#ffffff',
                    pointBorderWidth: 2,
                    pointRadius: 4,
                    pointHoverRadius: 6
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
                intersect: false,
                mode: 'index'
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    titleColor: '#1F2937',
                    bodyColor: '#4B5563',
                    borderColor: '#E5E7EB',
                    borderWidth: 1,
                    cornerRadius: 12,
                    padding: 12,
                    displayColors: true,
                    callbacks: {
                        title: function(context) {
                            return `شهر ${context[0].label}`;
                        },
                        label: function(context) {
                            const value = new Intl.NumberFormat('ar-SA', {
                                style: 'currency',
                                currency: 'USD'
                            }).format(context.parsed.y);
                            return `${context.dataset.label}: ${value}`;
                        }
                    }
                }
            },
            scales: {
                x: {
                    grid: {
                        color: '#F3F4F6',
                        drawBorder: false
                    },
                    ticks: {
                        color: '#6B7280',
                        font: {
                            family: 'Cairo',
                            size: 12
                        }
                    }
                },
                y: {
                    grid: {
                        color: '#F3F4F6',
                        drawBorder: false
                    },
                    ticks: {
                        color: '#6B7280',
                        font: {
                            family: 'Cairo',
                            size: 12
                        },
                        callback: function(value) {
                            return new Intl.NumberFormat('ar-SA', {
                                style: 'currency',
                                currency: 'USD',
                                minimumFractionDigits: 0,
                                maximumFractionDigits: 0
                            }).format(value);
                        }
                    }
                }
            },
            elements: {
                point: {
                    hoverBorderWidth: 3
                }
            }
        }
    });
}

// Customer Segments Pie Chart
function initializeSegmentChart() {
    const ctx = document.getElementById('segmentChart');
    if (!ctx) return;
    
    const segments = dashboardData.segments;
    
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: segments.map(s => s.name),
            datasets: [{
                data: segments.map(s => s.value),
                backgroundColor: segments.map(s => s.color),
                borderColor: '#ffffff',
                borderWidth: 3,
                hoverBorderWidth: 4,
                hoverBorderColor: '#ffffff'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '70%',
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    titleColor: '#1F2937',
                    bodyColor: '#4B5563',
                    borderColor: '#E5E7EB',
                    borderWidth: 1,
                    cornerRadius: 12,
                    padding: 12,
                    callbacks: {
                        label: function(context) {
                            const segment = segments[context.dataIndex];
                            const revenue = new Intl.NumberFormat('ar-SA', {
                                style: 'currency',
                                currency: 'USD'
                            }).format(segment.revenue);
                            return [
                                `${segment.name}`,
                                `النسبة: ${segment.value}%`,
                                `الإيرادات: ${revenue}`
                            ];
                        }
                    }
                }
            },
            elements: {
                arc: {
                    borderRadius: 8
                }
            },
            animation: {
                animateRotate: true,
                animateScale: true,
                duration: config.animationDuration
            }
        }
    });
}

// Initialize mini charts for other cards
function initializeMiniCharts() {
    // You can add more mini charts here for other cards
}

// Real-time Updates
function startRealTimeUpdates() {
    setInterval(() => {
        updateRealTimeMetrics();
        updateActivityFeed();
        updateLastUpdateTime();
    }, config.updateInterval);
}

function updateRealTimeMetrics() {
    // Simulate real-time metric updates
    const variations = {
        revenue: (Math.random() - 0.5) * 1000,
        customers: Math.random() > 0.7 ? Math.floor(Math.random() * 3) : 0,
        employees: Math.floor((Math.random() - 0.5) * 100),
        growth: (Math.random() - 0.5) * 0.5
    };
    
    // Update dashboard data
    dashboardData.currentRevenue += variations.revenue;
    dashboardData.currentCustomers += variations.customers;
    dashboardData.currentEmployees += variations.employees;
    dashboardData.growthRate += variations.growth;
    
    // Update DOM elements with animation
    animateValue('.revenue-card .card-value', dashboardData.currentRevenue, (value) => 
        `$${new Intl.NumberFormat('en-US').format(Math.floor(value))}`
    );
    
    animateValue('.customers-card .card-value', dashboardData.currentCustomers, (value) => 
        new Intl.NumberFormat('en-US').format(Math.floor(value))
    );
    
    animateValue('.employees-card .card-value', dashboardData.currentEmployees, (value) => 
        new Intl.NumberFormat('en-US').format(Math.floor(value))
    );
    
    animateValue('.growth-card .card-value', dashboardData.growthRate, (value) => 
        `+${value.toFixed(1)}%`
    );
}

function updateActivityFeed() {
    // Simulate new activity
    if (Math.random() > 0.8) {
        const newActivities = [
            {
                time: getCurrentTime(),
                type: 'new_employee',
                icon: 'fa-user-plus',
                color: 'info',
                message: `تمت إضافة ${Math.floor(Math.random() * 50 + 10)} موظف جديد`,
                value: null
            },
            {
                time: getCurrentTime(),
                type: 'payment',
                icon: 'fa-credit-card',
                color: 'success',
                message: 'تم تجديد اشتراك شهري',
                value: `+$${Math.floor(Math.random() * 5000 + 1000)}`
            },
            {
                time: getCurrentTime(),
                type: 'system',
                icon: 'fa-server',
                color: 'info',
                message: 'تحديث قاعدة البيانات مكتمل',
                value: null
            }
        ];
        
        const randomActivity = newActivities[Math.floor(Math.random() * newActivities.length)];
        addActivityItem(randomActivity);
    }
}

function addActivityItem(activity) {
    const activityFeed = document.querySelector('.activity-feed');
    if (!activityFeed) return;
    
    const activityHtml = `
        <div class="activity-item" style="opacity: 0; transform: translateY(-10px);">
            <div class="activity-time">${activity.time}</div>
            <div class="activity-content">
                <i class="fas ${activity.icon} text-${activity.color}"></i>
                <span>${activity.message}</span>
                ${activity.value ? `<span class="activity-value">${activity.value}</span>` : ''}
            </div>
        </div>
    `;
    
    activityFeed.insertAdjacentHTML('afterbegin', activityHtml);
    
    // Animate in
    const newItem = activityFeed.firstElementChild;
    setTimeout(() => {
        newItem.style.opacity = '1';
        newItem.style.transform = 'translateY(0)';
    }, 100);
    
    // Remove old items (keep only last 10)
    const items = activityFeed.querySelectorAll('.activity-item');
    if (items.length > 10) {
        items[items.length - 1].remove();
    }
}

function updateLastUpdateTime() {
    const lastUpdateElement = document.getElementById('last-update');
    if (lastUpdateElement) {
        lastUpdateElement.textContent = 'قبل لحظات';
    }
}

// Utility Functions
function getCurrentTime() {
    const now = new Date();
    return `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
}

function animateValue(selector, endValue, formatter) {
    const element = document.querySelector(selector);
    if (!element) return;
    
    const startValue = parseFloat(element.textContent.replace(/[^0-9.-]/g, '')) || 0;
    const duration = 1000;
    const startTime = performance.now();
    
    function updateValue(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function (ease-out)
        const easedProgress = 1 - Math.pow(1 - progress, 3);
        const currentValue = startValue + (endValue - startValue) * easedProgress;
        
        element.textContent = formatter(currentValue);
        
        if (progress < 1) {
            requestAnimationFrame(updateValue);
        }
    }
    
    requestAnimationFrame(updateValue);
}

function animateCounters() {
    const counterElements = document.querySelectorAll('.card-value');
    
    counterElements.forEach(element => {
        const finalValue = element.textContent;
        element.textContent = '0';
        
        setTimeout(() => {
            element.textContent = finalValue;
        }, Math.random() * 500 + 200);
    });
}

function populateActivityFeed() {
    const activityFeed = document.querySelector('.activity-feed');
    if (!activityFeed) return;
    
    // Clear existing activities and add fresh ones
    activityFeed.innerHTML = '';
    
    dashboardData.activities.forEach((activity, index) => {
        setTimeout(() => {
            addActivityItem(activity);
        }, index * 100);
    });
}

// Event Listeners
function setupEventListeners() {
    // Sidebar toggle
    const sidebarToggle = document.querySelector('.sidebar-toggle');
    const sidebar = document.querySelector('.sidebar');
    
    if (sidebarToggle && sidebar) {
        sidebarToggle.addEventListener('click', () => {
            sidebar.classList.toggle('collapsed');
        });
    }
    
    // Mobile sidebar
    const mobileMenuTrigger = document.querySelector('[data-mobile-menu]');
    if (mobileMenuTrigger && sidebar) {
        mobileMenuTrigger.addEventListener('click', () => {
            sidebar.classList.toggle('open');
        });
    }
    
    // Card hover effects
    const cards = document.querySelectorAll('.stats-card, .analytics-card, .table-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-4px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Export functionality
    const exportBtn = document.querySelector('[data-export]');
    if (exportBtn) {
        exportBtn.addEventListener('click', exportDashboardData);
    }
    
    // Period selector
    const periodSelector = document.querySelector('.period-selector');
    if (periodSelector) {
        periodSelector.addEventListener('change', (e) => {
            updateChartsForPeriod(e.target.value);
        });
    }
    
    // Real-time activity toggle
    const activityToggle = document.querySelector('[data-activity-toggle]');
    if (activityToggle) {
        activityToggle.addEventListener('click', toggleRealTimeActivity);
    }
}

// Export Dashboard Data
function exportDashboardData() {
    const exportData = {
        timestamp: new Date().toISOString(),
        summary: {
            totalRevenue: dashboardData.currentRevenue,
            totalCustomers: dashboardData.currentCustomers,
            totalEmployees: dashboardData.currentEmployees,
            growthRate: dashboardData.growthRate
        },
        monthlyRevenue: dashboardData.monthlyRevenue,
        segments: dashboardData.segments,
        metrics: dashboardData.metrics
    };
    
    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = `dashboard-report-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    // Show success message
    showNotification('تم تصدير التقرير بنجاح', 'success');
}

// Update charts for different periods
function updateChartsForPeriod(period) {
    // This would filter data based on the selected period
    console.log(`Updating charts for period: ${period}`);
    showNotification(`تم تحديث البيانات للفترة: ${period}`, 'info');
}

// Toggle real-time activity
function toggleRealTimeActivity() {
    const indicator = document.querySelector('.status-indicator.live');
    if (indicator) {
        indicator.classList.toggle('paused');
        const isPaused = indicator.classList.contains('paused');
        showNotification(
            isPaused ? 'تم إيقاف التحديث المباشر' : 'تم تفعيل التحديث المباشر',
            isPaused ? 'warning' : 'success'
        );
    }
}

// Notification System
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${getNotificationIcon(type)}"></i>
            <span>${message}</span>
        </div>
        <button class="notification-close">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        left: 20px;
        right: 20px;
        max-width: 400px;
        margin: 0 auto;
        padding: 16px;
        background: white;
        border-radius: 12px;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        border-left: 4px solid var(--${type === 'success' ? 'success' : type === 'warning' ? 'warning' : type === 'error' ? 'danger' : 'info'}-color);
        z-index: 9999;
        transform: translateY(-100%);
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateY(0)';
    }, 100);
    
    // Close button
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.transform = 'translateY(-100%)';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.transform = 'translateY(-100%)';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

function getNotificationIcon(type) {
    const icons = {
        success: 'check-circle',
        warning: 'exclamation-triangle',
        error: 'exclamation-circle',
        info: 'info-circle'
    };
    return icons[type] || 'info-circle';
}

// Performance Monitoring
function trackPerformance() {
    const perfObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
            if (entry.entryType === 'measure') {
                console.log(`${entry.name}: ${entry.duration.toFixed(2)}ms`);
            }
        }
    });
    
    perfObserver.observe({ entryTypes: ['measure'] });
    
    // Mark dashboard initialization
    performance.mark('dashboard-start');
    
    window.addEventListener('load', () => {
        performance.mark('dashboard-end');
        performance.measure('dashboard-initialization', 'dashboard-start', 'dashboard-end');
    });
}

// Initialize performance tracking
trackPerformance();

// Error Handling
window.addEventListener('error', (event) => {
    console.error('Dashboard Error:', event.error);
    showNotification('حدث خطأ في النظام', 'error');
});

// Responsive handling
window.addEventListener('resize', () => {
    // Debounce resize events
    clearTimeout(window.resizeTimer);
    window.resizeTimer = setTimeout(() => {
        // Resize charts if needed
        Chart.helpers.each(Chart.instances, (instance) => {
            instance.resize();
        });
    }, 250);
});

// Service Worker for offline functionality (if needed)
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(() => {
        console.log('Service Worker registration failed');
    });
}

// Debug mode for development
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    window.dashboardDebug = {
        data: dashboardData,
        config: config,
        updateMetrics: updateRealTimeMetrics,
        addActivity: addActivityItem,
        showNotification: showNotification
    };
    console.log('🔧 Debug mode enabled. Access dashboard controls via window.dashboardDebug');
} 