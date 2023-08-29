<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, minimum-scale=1.0, initial-scale=1, shrink-to-fit=no">
    <link rel="shortcut icon" href="../images/favicon.ico" type="image/x-icon">
   
    <title>Oz Clean -</title>
    <link rel="canonical" href="https://ozclean.com.au/brisbane/blog/" />

    <!-- StyleSheets -->
    <?php include('__stylesheet.inc.php') ?>
</head>
<body> 

    <!-- Preloader, Navigation, Top Header -->
    <?php include('__navbar.inc.php') ?>


    <!-- Header Wrapper Start -->
    <header class="header__wrapper page__header subpage text-center blog" style="background: #000 url('../images/about/header-bg.webp') no-repeat center top / cover;">
        <div class="container">
            <h1 class="h1 text-white text-uppercase">BLOG</h1> 
        </div><!--.//container-->
    </header>
    <!-- Header Wrapper End -->

    <!-- Blog Content Wrapper Start -->
    <main class="blog__page">
        <div class="ptb">
            <div class="container">
                <div class="row g-4">
                    <div class="col-lg-8">

                        <!-- Blog Item -->
                        <div class="blog__item">
                            <a href="ultimate-winter-cleaning-checklist.php" class="d-block">
                                <figure>
                                    <img src="images/03082023-ultimate-winter-cleaning-checklist.webp" class="img-fluid no__height" alt="blog thumbnail">
                                </figure>
                            </a>
                            <h3 class="mt-3 mt-lg-4"><a href="ultimate-winter-cleaning-checklist.php">The Ultimate Winter Cleaning Checklist For Your Home</a></h3>
                            <div class="info__box d-flex align-items-center mt-2 mt-lg-3">
                                <div class="date d-flex align-items-center me-4">
                                    <img src="images/calander.svg" class="img-fluid me-2" alt="calander">
                                    <span>August 03, 2023</span>
                                </div>
                                <div class="date d-flex align-items-center">
                                    <img src="images/user.svg" class="img-fluid me-2" alt="calander">
                                    <span>Admin</span>
                                </div>
                            </div>
                            <p class="desc mt-3">
                                As the temperatures drop and the snow starts to fall, it's important to prioritize winter cleaning. While spring cleaning frequently receives all the attention, winter cleaning is just as important to keep a home comfortable and healthy during the year’s colder months.
                            </p>
                            <a href="ultimate-winter-cleaning-checklist.php" class="link fw-semibold">READ MORE >>></a>
                        </div><!--.//blog__item-->
                         
 


                        <!-- Pagination -->
                        <?php 
                            $firstArrow="false"; $lastArrow="true"; 
                            $prevPageUrl="index.php";
                            $nextPageUrl="page-2.php"; 
                            $active     = '1';
                            include_once('_pagination.inc.php'); 
                        ?>

                    </div><!--.//col-->

                    <div class="col-lg-4">
                        <?php include('__highlight.inc.php'); ?>
                    </div><!--.//col-->
                </div><!--.//row-->
            </div><!--.//container-->
        </div>
    </main>
    <!-- Blog Content Wrapper End -->

   
    <!-- Footer Section -->
    <?php include('__footer.inc.php'); ?>
    
</body>
</html>